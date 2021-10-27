import React from 'react'
import { PetType } from './Pet';


function SearchBar({setPets} : any) {
    const pets = JSON.parse(window.localStorage.getItem("petList") || "");
    const [option, setOption] = React.useState<string>("title")
    console.log(option);
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const inputValue = event.target.search.value;
        const filteredPets = (pets as Array<PetType>).filter((pet: any) => {
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
            <button type="submit"/>
        </form>
    )
}

export default SearchBar
