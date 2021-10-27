import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '..';
import { downloadPetImage } from '../utils/DownloadImage';
import { filterPets, downloadAllPets, removeAllPets } from '../actions/actions';
import styled from 'styled-components';


const DownloadIcon = styled.img`
    position: fixed;
    bottom: 5rem;
    right: 7rem;
    cursor: pointer;
	border-radius: 100%;
	box-shadow: 3px 3px 4px gray;
    &:hover {
        bottom: 5.2rem;
    }
`

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

            <DownloadIcon width={70} height={70} src="download.png" onClick={() => {downloadPetImage(filteredPets); dispatch(removeAllPets());}}/>
            <button onClick={() => dispatch(downloadAllPets())}>select all</button>
            <button onClick={() => dispatch(removeAllPets())}>clear all</button>
        </div>


    )
}

export default SearchBar
