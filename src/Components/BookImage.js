import React from 'react'

const BookImage = (props) => {
    return(
        <div className="selected-book-img-container">

            <div 
                className="selected-book-img" 
                style={{background: `url(${process.env.PUBLIC_URL + props.image.slice(7)})`, backgroundSize: 'cover'}}>
            </div>

        </div>
    )
}

export default BookImage