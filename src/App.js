import React from "react"; 
import './App.css';
import {useState} from "react"
import SearchBox from "./componentes/SearchBox";
import FilteredList from "./componentes/FilteredList"


function App() {
  const list=[
    {id: "1", name:"Citizen Kane",year: "1941", director: "Orson Welles"},
    {id: "2", name:"Casablanca",year: "1941", director: "Michael Curtiz"},
    {id: "3", name:"The Godfather",year: "1972", director: "Francis Ford Coppola"},
    {id: "4", name:"Gone with the wind",year: "1939", director: "Victor Fleming"},
    {id: "5", name:"Lawrence of Arabia",year: "1962", director: "Victor Fleming"},
    {id: "6", name:"The Wizard of Oz",year: "1939", director: "Orson Welles"},
    {id: "7", name:"The Graduate",year: "1967", director: "Mike Nichols"},
    {id: "8", name:"On the Waterfront",year: "1954", director: "Elia Kazan"},
    {id: "9", name:"Schindler's List",year: "1993", director: "Steven Spielberg"},
    {id: "10", name:"Singin'",year: "1952", director: "Stanley Donen"},
    {id: "11", name:"It's a Wonderful Life",year: "1946", director: "Frank Capra"},
    {id: "12", name:"Sunset Boulevard",year: "1950", director: "Billy Wilder"},
    {id: "13", name:"The Bridge on the River Kwai",year: "1957", director: "David Lean"},
    {id: "14", name:"Some Like It Hot",year: "1959", director: "Billy Wilder"},
    {id: "15", name:"Star Wars: Episode IV",year: "1977", director: "George Lucas"},
    {id: "16", name:"All About Eve",year: "1950", director: "Joseph L. Mankiewicz"},
    {id: "17", name:"The African Queen",year: "1952", director: "John Huston"},
    {id: "18", name:"Psycho",year: "1960", director: "Alfred Hitchcock"},
    {id: "19", name:"Chinatown",year: "1974", director: "Roman Polański"},
    {id: "20", name:"One Flew Over the Cuckoo's",year: "1975", director: "John Walker"}]
  const [elements, setElements] =useState(list)
  const [searchText, setSearchText] =useState("")
  const handleSearch = (text) =>{
    setSearchText(text)
  }
  return (
    <div className="App">
      <h1>FILM</h1>
      <SearchBox onSearch={handleSearch}/>
      <FilteredList elements={elements} searchText={searchText}/>
    </div>
  );
}

export default App;
