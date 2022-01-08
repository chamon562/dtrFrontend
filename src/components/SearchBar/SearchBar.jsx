import React from 'react'
import './SearchBar.css'

// this component will take in 2 different props
// one will be the placeholder 
// and the other is data
const SearchBar = ({placeholder, data}) => {
    // whenever were filtering which names or whatever the case we need to indentify
    // what fields were using
    return (
        <div className='search' >
            {/* divide into 2 different places */}
            <div className="searchInputs">
                {/* add in the input and type text */}
                <input type="text" />
                {/* div that will contain the little square right next to input 
                which inside of it will be the icon */}
                <div className="searchIcon">

                </div>
            </div>
            {/* another div to show the results */}
            <div className="dataResults"></div>
        </div>
    )
}

export default SearchBar
