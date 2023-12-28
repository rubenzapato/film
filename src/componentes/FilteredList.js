import React from "react"
import "./styles.css"

const FilteredList = ({ elements, searchText }) => {
    const filteredElements = elements.filter((element) =>
      element.name.toLowerCase().includes(searchText.toLowerCase())
    ) || [];
  
    return (
      <section>
        {filteredElements.map((element) => (
          <div key={element.id}>
            <h3>{element.name}</h3>
            <p>year: {element.year}</p>
            <p>Director: {element.director}</p>
          </div>
        ))}
      </section>
    );
  };
export default FilteredList;