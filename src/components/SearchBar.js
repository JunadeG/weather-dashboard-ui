import React, { useState } from "react"; // useState is React's "memory" tool. It lets our component remember things.

// The component recieves a function 'onSearch' from its parent as a prop

function SearchBar({ onSearch }) {
    // This is state to control the input value.
    const [city, setCity] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(city); // Call the parents function with the current city
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter city name..."
                value={city}// the inputs value is tied  to the state
                onChange={(e) => setCity(e.target.value)}

                />
                <button type="submit"> Get Weather </button>
                
                </form>
    );
}

export default SearchBar;