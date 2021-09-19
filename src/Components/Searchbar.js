import React from 'react'
import searchIcon from '../assets/search.png'

const Searchbar = () => {
    return(

        <div className="searchbar-container">
            <div className="search-icon">
                <img src={searchIcon} alt="" className="search-img"/>
            </div>
        </div>

    )
}

export default Searchbar