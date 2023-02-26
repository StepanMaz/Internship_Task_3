export interface ExpandedBookDTO {
    id: number,
 	title: string,
 	author: string,
	cover: string,
 	content: string,
 	rating: number,
    genre: string
 	reviews: [{
     	    id: number,
     	    message: string,
     	    reviewer: string,
 	}],
}

export interface ReviewedBookDTO {
    id: number,
 	title: string,
 	author: string,
	cover: string,
 	content: string,
 	rating: number,
	reviewNumber: number
}

