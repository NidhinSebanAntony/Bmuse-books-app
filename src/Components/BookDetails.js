import React, { useContext, useRef, useEffect } from 'react'
import { RootContext } from "../context/RootContext";
import AddToFavouriteButton from './AddToFavoriteButton';
import BookImage from './BookImage';
import BookDesc from './BookDesc';
import CloseButton from './CloseButton';

const BookDetails = () => {

    const { selectedBook } = useContext(RootContext)

    const bookEndRef = useRef(null)

    const scrollToBottom = () => {
        bookEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(scrollToBottom, [selectedBook]);



    return(
        <div className="book-details-container">
            {selectedBook&&<div className="book-details">
                <div className="book-details-wrapper">
                    <div style={{minWidth: '30vw'}}>
                        <span className="selected-book-title">{selectedBook.title}</span>
                        <BookImage 
                            image={selectedBook.book_image}
                        />
                        <AddToFavouriteButton />
                    </div>
                    <BookDesc 
                        author={selectedBook.author}
                        publisher={selectedBook.publisher}
                    />
                </div>
               <CloseButton />
            </div>}
            <div ref={bookEndRef}></div>
        </div>
    )
}

export default BookDetails;