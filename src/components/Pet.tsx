import React from 'react'
import styled from 'styled-components';
import { addDownloadPet, removeDownloadPet } from '../actions/actions';
import {useDispatch} from 'react-redux';


interface ImageProps {
    selected: boolean
}

const StyledImage = styled.img<ImageProps>`
    width: 100%;
    opacity: ${p => p.selected ? 0.3 : 1};
    `;

const StyledPet = styled.div`
    width: 400px;
    box-shadow: 0 0 15px -5px;
    transition: all .2s linear;
    margin: 1rem;
    margin-bottom: 2rem;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 15px 0px;
    }
`
const StyledBio = styled.div`
    padding: 1rem;
`

function Pet(props: IPet) {
    const {created, description, title, url, shouldDownload} = props;
    const dispatch = useDispatch();

    const formattedDate = new Date(created).toLocaleString();

    const handleSelectedPet = () => {
        if (!shouldDownload)
            dispatch(addDownloadPet(props));
        else
            dispatch(removeDownloadPet(props));
    }

    return (
        <StyledPet>
            <div>
                <StyledImage src={url} selected={shouldDownload} onClick={() => handleSelectedPet()}/> 
            </div>
            <StyledBio>
                <p>{title}</p>
                <div>{description}</div>
                <i>{formattedDate}</i>
            </StyledBio>  
        </StyledPet>
    )
}

export default Pet
