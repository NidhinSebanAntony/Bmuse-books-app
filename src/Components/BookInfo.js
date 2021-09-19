import React from 'react'

const BookInfo = (props) => {

    return(

        <div className="book-info">
            <span className="book-title">{props.title}</span><br /><br />
            <span className="book-author">{props.author}</span><br />
            <span className="book-author">{props.publisher}</span>
        </div>   

    )
    
}

export default BookInfo