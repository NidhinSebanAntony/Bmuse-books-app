import React from 'react'

const BookRating = (props) => {

    return(

            <div className="book-rating">       
                {props.rating} out of 5
            </div>

    )
    
}

export default BookRating