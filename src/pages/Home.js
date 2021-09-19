import React from 'react'
import BookDetails from '../Components/BookDetails';
import BookList from '../Components/BookList';
import BooksMain from '../Components/BooksMain';
const Home = () => {
    return(
        <div className="App">
            <BooksMain />
            <BookList />
            <BookDetails />
        </div>
    )
}

export default Home