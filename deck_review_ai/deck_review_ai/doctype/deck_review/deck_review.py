# Copyright (c) 2024, Zen Pivot and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import frappe
from frappe.model.document import Document
from pdf2image import convert_from_path
from PyPDF2 import PdfReader
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, PageBreak
from PIL import Image
import pytesseract
import os
import difflib
import numpy as np
import cv2
import os
from openai import AzureOpenAI
import json
from frappe.utils.background_jobs import enqueue
import requests
import base64




class DeckReview(Document):
    
    def validate(self):
        self.set_text_in_text_editor()
    #     self.get_chat_response()


    #the below code is for get the pdf file with slide wise to extract the text from images
    # Extract text from PDF file
    def extract_text_from_pdf(self, pdf_path):
        reader = PdfReader(pdf_path)
        text = []
        for i, page in enumerate(reader.pages):
            page_text = page.extract_text()
            if page_text:
                lines = page_text.split('\n')
                headline = lines[0] if lines else "[No headline]"
                content = "\n".join(lines[1:]) if len(lines) > 1 else "[No content]"
                text.append((f"Slide {i + 1}", headline, content))
            else:
                text.append((f"Slide {i + 1}", "[No headline]", "[No text found]"))
        return text

    # Process the image in PDF
    def preprocess_image(self, img):
        # Convert to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        # Apply thresholding to get a binary image
        _, binary_image = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        return binary_image

    # Extract the text from images with preprocessing
    def extract_text_from_images(self, pdf_path):
        images = convert_from_path(pdf_path)
        slide_texts = []
        for i, img in enumerate(images):
            open_cv_image = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
            processed_image = self.preprocess_image(open_cv_image)
            image_text = pytesseract.image_to_string(processed_image)
            lines = image_text.split('\n')
            headline = lines[0] if lines else "[No headline]"
            content = "\n".join(line.strip() for line in lines[1:] if line.strip()) if len(lines) > 1 else "[No content]"
            slide_texts.append((f"Image Slide Text {i + 1}", headline, content))
        return slide_texts

    # Order the text
    def create_pdf_with_text(self, text_list, output_path):
        doc = SimpleDocTemplate(output_path, pagesize=letter)
        styles = getSampleStyleSheet()
        story = []

        for slide, headline, content in text_list:
            slide_number_paragraph = Paragraph(f"<b>{slide}</b>", styles['Title'])
            story.append(slide_number_paragraph)
            story.append(Spacer(1, 12))
            # Add headline
            headline_paragraph = Paragraph(f"<b>Headline:</b> {headline}", styles['Heading2'])
            story.append(headline_paragraph)
            story.append(Spacer(1, 12))
            # Add content
            content_paragraph = Paragraph(content, styles['BodyText'])
            story.append(content_paragraph)
            story.append(Spacer(1, 24))
            # Add slide separator
            story.append(PageBreak())
        # Build the PDF document
        doc.build(story)

    # Merge the PDF text and image PDF text
    def merge_texts(self, text1, text2):
        merged_text = []
        for (slide1, head1, cont1), (slide2, head2, cont2) in zip(text1, text2):
            slide = slide1
            headline = head1 if head1 != "[No headline]" else head2
            content = []
            lines1 = cont1.splitlines()
            lines2 = cont2.splitlines()
            matcher = difflib.SequenceMatcher(None, lines1, lines2)
            for tag, i1, i2, j1, j2 in matcher.get_opcodes():
                if tag == 'equal':
                    content.extend(lines1[i1:i2])
                elif tag in ('replace', 'insert', 'delete'):
                    content.extend(lines1[i1:i2])
                    content.extend(lines2[j1:j2])
            merged_text.append((slide, headline, "\n".join(content)))
        return merged_text

    # Get the merged text and set it in the text editor
    def set_text_in_text_editor(self):
        file_doc = self.deck_attach
        file_url = file_doc
        if file_url.startswith("/private/files/"):
            pdf_path = frappe.get_site_path("private", "files", os.path.basename(file_url))
        elif file_url.startswith("/files/"):
            pdf_path = frappe.get_site_path("public", "files", os.path.basename(file_url))
        else:
            raise FileNotFoundError(f"File URL does not match expected pattern: {file_url}")
        extracted_text = self.extract_text_from_pdf(pdf_path)
        extracted_image_text = self.extract_text_from_images(pdf_path)
        merged_text = self.merge_texts(extracted_text, extracted_image_text)
        # Convert the merged text list into a single string
        formatted_text = "\n\n".join(
            f"{slide}\nHeadline: {headline}\nContent:\n{content}" for slide, headline, content in merged_text
        )
        self.pdf_extraction = formatted_text

    # def get_chat_response(self):
    #     user_input = self.pdf_extraction
    #     end_point = "https://llm01.openai.azure.com/"
    #     api_key = "e7fd4214bc6448afaf7f802f1f82ae2c"
    #     deployment = os.getenv("DEPLOYMENT_NAME", "gpt-35-turbo")


    #     client = AzureOpenAI(
    #         api_version="2024-02-01",
    #         azure_endpoint=end_point,
    #         api_key=api_key)

    #     completion = client.chat.completions.create(
    #         model=deployment,
    #         messages = [
    #         { 
    #             "role": "system", 
    #             "content":self.system_prompt
    #         },
    #         { 
    #             "role": "user", 
    #             "content": user_input 
    #         },
    #         ],
    #         max_tokens=2000,
    #         temperature=0.7,
    #         top_p=0.95,
    #         frequency_penalty=0,
    #         presence_penalty=0,
    #         stop=None,
    #         stream=False
    #     )
        
    #     get_response_data = completion.to_json()
    #     change_resposne_data_json_loads = json.loads(get_response_data)
    #     self.extraction_response = change_resposne_data_json_loads["choices"][0]["message"]["content"]



    def get_slide_images_from_pdf(self,doc_name):
        doc = frappe.get_doc('Slide Images', doc_name)
        file_url = frappe.get_site_path() + doc.pdf_slide
        local_path = "/tmp/temp_pdf.pdf"
        with requests.get(file_url, stream=True) as r:
            r.raise_for_status()
            with open(local_path, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
        images = convert_from_path(local_path)   
        for i, image in enumerate(images):
            aspect_ratio = image.height / image.width
            new_width = 700
            new_height = int(new_width * aspect_ratio)
            image = image.resize((new_width, new_height), Image.LANCZOS)
            # Save each image to a temporary path
            temp_image_path = f'/tmp/slide_image_{i}.png'
            image.save(temp_image_path, 'PNG')       

            with open(temp_image_path, "rb") as img_file:
                encoded_image = base64.b64encode(img_file.read()).decode('utf-8')
            doc.append("slide_data", {
                "slide_text": "text",
                "image_base64": encoded_image
            })  
        os.remove(temp_image_path)        
        doc.save(ignore_permissions=True)
        os.remove(local_path)
