import React from 'react'
import {useSelector} from 'react-redux';
import { downloadPetImage } from '../utils/DownloadImage';

function SearchBar({setPets} : any) {
    const pets = JSON.parse(window.localStorage.getItem("petList") || "");
    const [option, setOption] = React.useState<string>("title");
    const downloadPetList = useSelector((state: any) => state.petReducer);
    
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
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <select id="select-filter" onChange={(event) => setOption(event.target.value)} value={option}>
                    <option value="title">title</option>
                    <option value="description">description</option>
                </select>
                <input type="text" name="search"/>
                <button type="submit">search</button>
            </form>
            <button onClick={() => downloadPetImage(downloadPetList)}>download</button>
        </div>


    )
}

export default SearchBar
