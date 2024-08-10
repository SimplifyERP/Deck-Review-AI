import React, { useState, useEffect, useRef } from "react";

import { toast } from "react-toastify";
import PrimaryButton from "../Components/PrimaryButton";
import { useTranslation } from "react-i18next";
// import { ReactComponent as Upload } from "../assets/Images/ic_upload.svg";
import Upload from "../assets/Images/ic_upload.png";
// import { DeckReview } from "@/types/DeckReviewAI/DeckReview";
import {
  useFrappeCreateDoc,
  useFrappeGetDocList,
  useFrappeAuth,
} from "frappe-react-sdk";

const UploadDeck = () => {
  const [file, setFile] = useState(null);
  const { t } = useTranslation("");
  const inputRef = useRef();

  //const { createDoc, loading, error } = useFrappeCreateDoc<DeckReview>();

  const { currentUser, login } = useFrappeAuth();

  login({
    username: "jagadeesan.a1104@gmail.com",
    password: "Jaga@12345",
  });

  if (currentUser) {
    //toast.success("Your account has been logged in successfully");
    //navigate("/user");
  }

  const { createDoc, loading, error1 } = useFrappeCreateDoc();

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");

  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);

    const formData = new FormData();
    formData.append("deck_attach", file);

    createDoc("Deck Review", formData).then(() => {
      toast.success("Done");
    });

    // const file = event.target.files[0];
    // if (file && file.type === "application/pdf") {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setPdfUrl(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // } else {
    //   alert("Please upload a valid PDF file");
    // }
  };

  const { data1, error, isLoading } = useFrappeGetDocList("Deck Review", {
    fields: ["deck_attach", "pdf_extraction"],
  });

  //console.log("PDF File : " + data1);
  toast.success(data1);
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const convertBase64ToFileUrl = (base64String) => {
    // Split the base64 string to get the MIME type and the base64 data
    const byteString = atob(base64String.split(",")[1]);
    const mimeType = base64String.split(",")[0].split(":")[1].split(";")[0];

    // Create a byte array
    const byteNumbers = new Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      byteNumbers[i] = byteString.charCodeAt(i);
    }

    // Convert the byte array to a Blob
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });

    // Create a file URL from the Blob
    return URL.createObjectURL(blob);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first!");
      //   alert("Please select a file first!");
      return;
    }
    // console.log("PDF File : " + pdfUrl);
    // const base64String = "data:application/pdf;base64," + pdfUrl; // Your base64 string here
    const fileUrl = convertBase64ToFileUrl(pdfUrl);
    setFileUrl(fileUrl);

    // console.log("PDF File : " + pdfUrl);

    // const formData = new FormData();
    // formData.append("file", file);

    // const docData = {
    //   deck_attach: formData,
    // };

    const formData = new FormData();
    formData.append("deck_attach", file);

    // console.log(formData.values);

    // createDoc("Deck Review", {
    //   deck_attach: pdfUrl,
    // }).then(() => {
    //   toast.success("Done");
    // });

    createDoc("Deck Review", formData).then(() => {
      toast.success("Done");
    });

    // try {
    //   const response = await axios.post('/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    //   alert('File uploaded successfully!');
    // } catch (error) {
    //   console.error('Error uploading file:', error);
    //   alert('Failed to upload file');
    // }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  const isDisabled = !file;

  return (
    <div className="bg-mYellowTwo p-5 min-h-screen min-w-screen items-center justify-center flex flex-col">
      <p className="text-left font-OpenSauceSansSemiBold text-xl">
        {t("uploaddeck")}
      </p>

      <div
        className="border border-mGreySix w-1/3 h-72 rounded-lg items-center justify-center mt-5"
        onClick={onChooseImg}
      >
        {!file ? (
          <div className="flex flex-col items-center justify-center h-full">
            <img src={Upload} className="w-10 h-12 float-left" alt="" />

            <p className="text-left font-OpenSauceSansRegular mt-5 text-lg lg:text-xl ">
              {t("uploadyourdeck")}
            </p>
          </div>
        ) : (
          <div className=" items-center justify-center h-full flex flex-col">
            <p className="text-left font-OpenSauceSansRegular text-lg">
              {/* {file.name} */}
              {pdfUrl}
            </p>
          </div>
        )}

        <input
          className=""
          id="file"
          ref={inputRef}
          type="file"
          accept="application/pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      {/* <input
        type="file"
        accept="application/pdf"
        style={{ display: "none" }}
        onChange={handleFileChange}
      /> */}
      <div className="flex justify-center mt-5 w-1/4">
        <PrimaryButton
          label={t("uploaddeck")}
          onClick={handleUpload}
          onDisable={isDisabled}
        ></PrimaryButton>
      </div>
    </div>
  );
};

export default UploadDeck;
