import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookCard from './BookCard';
import { RootContext } from "../context/RootContext";

const BookSlider = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1300 },
          items: 5
        },
        laptop: {
            breakpoint: { max: 1300, min: 924 },
            items: 3
          },
        tablet: {
          breakpoint: { max: 923, min: 564 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 563, min: 0 },
          items: 1
        }
    };

    const { booksArray } = useContext(RootContext)


    return(
        <div className="slider">
            <Carousel responsive={responsive}>
                {booksArray.map(book => {
                    return(
                        <BookCard 
                            book={book}
                        />
                    )
                })}
            </Carousel>
        </div>
    )
}

export default BookSlider