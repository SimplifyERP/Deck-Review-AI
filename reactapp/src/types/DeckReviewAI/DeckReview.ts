
export interface DeckReview{
	name: number
	creation: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Deck Attach : Attach	*/
	deck_attach?: string
	/**	PDF Extraction : Text Editor	*/
	pdf_extraction?: string
	/**	Extraction Response : Text Editor	*/
	extraction_response?: string
}