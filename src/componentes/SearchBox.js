import React from "react"
import "./styles.css"


const SearchBox =({onSearch}) =>{
    const handleSearch = (e) =>{
        const text = e.target.value; 
        onSearch(text)
    }
    return(
        <input
        type="text"
        placeholder="Buscar.."
        onChange={handleSearch}/>
    )
}

export default SearchBox
