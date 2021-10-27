import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '..';
import { downloadPetImage } from '../utils/DownloadImage';
import { filterPets, downloadAllPets, removeAllPets } from '../actions/actions';

function SearchBar() {
    const [option, setOption] = React.useState<string>("title");
    const {pets, filteredPets} = useSelector((state: RootState) => state.petReducer);
    const dispatch = useDispatch();
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const inputValue = event.target.search.value;
        dispatch(filterPets(pets, option, inputValue))
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
            <button onClick={() => downloadPetImage(filteredPets)}>download</button>
            <button onClick={() => dispatch(downloadAllPets())}>select all</button>
            <button onClick={() => dispatch(removeAllPets())}>clear all</button>
        </div>


    )
}

export default SearchBar
