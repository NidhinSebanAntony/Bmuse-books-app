import React from 'react'
import BookSlider from './BookSlider'

const BookList = () => {
    return(
        <div className="book-list">
            <span className="book-categoery-title">Hardcover Fiction</span>
            <BookSlider />
        </div>
    )
}

export default BookList