import React, { useContext } from 'react'
import { RootContext } from "../context/RootContext";
import BookInfo from './BookInfo';
import BookRating from './BookRating';

const BookCard = (props) => {


    const { getSelectedBook } = useContext(RootContext)
    
    return(
        
        <div className="book-card-container" onClick={()=>getSelectedBook(props.book)}>
            <div className="fancy_card card-opacity" style={{background: `url(${process.env.PUBLIC_URL + props.book.book_image.slice(7)})`, backgroundSize: 'contain'}}>
                    <BookRating 
                        rating={props.book.rating}
                    />
                    <BookInfo 
                        title={props.book.title}
                        author={props.book.author}
                        publisher={props.book.publisher}
                    />  
            </div>
        </div>

    )
}

export default BookCard