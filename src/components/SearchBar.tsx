import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '..';
import { downloadPetImages } from '../utils/DownloadImage';
import { filterPets, downloadAllPets, removeAllPets } from '../actions/actions';
import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';


const StyledSearchBar = styled.div`
  margin: auto;
  width: 400px;
  margin-bottom: 3rem;
  margin-top: 20px;
`

const DownloadIcon = styled.img`
    position: fixed;
    bottom: 5rem;
    right: 7rem;
    cursor: pointer;
	border-radius: 100%;
	box-shadow: 3px 3px 4px gray;
    z-index: 10;
    background-color:white;
    &:hover {
        bottom: 5.2rem;
    }
`

const StyledButton = styled.button<any>`
    visibility: ${p => p.invisible ? "hidden" : "visible"};
    border: none;
    background-color: ${p => p.color};
    border-radius: 5px;
    padding: 5px;
    margin : 0.5rem;
`

const StyledInput = styled.input`
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid black;
    margin: 0 2px 0 5px;
`

const StyledForm = styled.form`
    display:flex;
`

function SearchBar() {
    const [option, setOption] = React.useState<string>("Title");
    const [activeList, setActiveList] = React.useState([true, false]);
    const {pets, filteredPets} = useSelector((state: RootState) => state.petReducer);
    const dispatch = useDispatch();
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const inputValue = event.target.search.value;
        dispatch(filterPets(pets, option.toLowerCase(), inputValue))
    }

    return (
        <StyledSearchBar>
            <StyledForm onSubmit={(event) => handleSubmit(event)}>
                <img src="search.png" width={30} height={30}></img>
                <StyledInput autoFocus type="text" name="search"/>
                <StyledButton type="submit" invisible={true}></StyledButton>
                <Dropdown>
                    <Dropdown.Toggle>
                        {option}
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item active={activeList[0]} onClick={() => {setActiveList([true, false]); setOption("Title")}}>Title</Dropdown.Item>
                        <Dropdown.Item active={activeList[1]} onClick={() => {setActiveList([false, true]); setOption("Description")}}>Description</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </StyledForm>

            <DownloadIcon width={70} height={70} src="download.png" onClick={() => {downloadPetImages(filteredPets); dispatch(removeAllPets());}}/>
            <StyledButton color='#D2EABA' onClick={() => dispatch(downloadAllPets())}>Select all</StyledButton>
            <StyledButton color='#FF9A98' onClick={() => dispatch(removeAllPets())}>Clear selection</StyledButton>
        </StyledSearchBar>


    )
}

export default SearchBar
