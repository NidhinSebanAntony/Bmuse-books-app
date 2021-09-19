import React from 'react'

const BookDesc = (props) => {
    return(
        <div className="selected-book-desc">
            <span className="selected-book-author">{props.author}</span><br />
            <span className="selected-book-publisher">{props.publisher}</span><br /><br />
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse arcu quam, volutpat quis finibus posuere, 
                ultricies vel ex. Nam suscipit, metus quis laoreet suscipit, 
                ante velit commodo magna, ut bibendum justo mauris quis ex. 
                Aenean vitae erat nulla. Donec quis libero hendrerit, tempor 
                diam id, lacinia augue. Pellentesque tincidunt luctus purus. 
                Praesent rutrum suscipit erat. Nulla sollicitudin malesuada lorem 
                in scelerisque. Aliquam ut lectus leo. Nunc eu purus tortor. Nam in 
                feugiat nibh, dignissim placerat quam. Donec non purus ex.  Lorem 
                ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet 
                metus lorem, vestibulum accumsan felis maximus ut. Suspendisse eget 
                nisi eu nulla convallis fringilla non et tellus. Pellentesque sit amet.
            </span>
        </div>
    )
}

export default BookDesc