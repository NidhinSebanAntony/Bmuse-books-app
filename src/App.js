import React,{ useState, useEffect } from 'react'
import './App.css';
import { RootContext } from './context/RootContext';
import Home from './pages/Home';
import { results } from "./books.json";


function App() {
  const [ selectedBook, setSelectedBook ] = useState(null)
  
  const [ booksArray, setBooksArray ] = useState([])

  useEffect(()=>{
      setBooksArray(results.books)        
  },[])

  const getSelectedBook = (book) => {
    setSelectedBook(book)
  }



  return (
    <RootContext.Provider 
      value={{
        selectedBook: selectedBook,
        booksArray: booksArray,
        getSelectedBook: getSelectedBook,
      }}>
      <Home />
    </RootContext.Provider>
  );
}

export default App;
