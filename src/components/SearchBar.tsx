import React from 'react'

function SearchBar({setPets} : any) {
    const pets = JSON.parse(window.localStorage.getItem("petList") || "");
    const [option, setOption] = React.useState<string>("title");
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const inputValue = event.target.search.value;
        const filteredPets = pets.filter((pet: any) => {
            return pet[option].includes(inputValue);
        })
        setPets(filteredPets);
        event.target.search.value = "";
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <select id="select-filter" onChange={(event) => setOption(event.target.value)} value={option}>
                <option value="title">title</option>
                <option value="description">description</option>
            </select>
            <input type="text" name="search"/>
            <button type="submit">search</button>
        </form>
    )
}

export default SearchBar
