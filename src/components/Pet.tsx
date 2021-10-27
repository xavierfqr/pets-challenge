import React from 'react'
import styled from 'styled-components';
import { addDownloadPet, removeDownloadPet } from '../actions/actions';
import {useDispatch} from 'react-redux';


interface ImageProps {
    selected: boolean
}

const StyledImage = styled.img<ImageProps>`
    width: 250px;
    height: 200px;
    opacity: ${p => p.selected ? 0.3 : 1};
    `;

const StyledPet = styled.div`
    display: flex;
    flex-direction: row;
    width:500px;
    transition: all .2s linear;
    & > div {
        display: flex;
        align-items:center;
        justify-content: space-around;
        background-color:beige ;
        flex-direction: column;
        i {
            font-size: 0.8rem;
        }
    }
    &:hover {
        transform: scale(1.1);
    }
`;


function Pet(props: IPet) {
    const {created, description, title, url, shouldDownload} = props;
    const dispatch = useDispatch();
    // avoid props dependency with useEffect
    const propsRef = React.useRef(props);

    const formattedDate = new Date(created).toLocaleString();

    const handleSelectedPet = () => {
        if (!shouldDownload)
            dispatch(addDownloadPet(propsRef.current));
        else
            dispatch(removeDownloadPet(propsRef.current));
    }

    return (
        <StyledPet>
            <div>
                <p>{title}</p>
                <div>{description}</div>
                <i>{formattedDate}</i>
            </div>
            <div>
                <StyledImage src={url} selected={shouldDownload} onClick={() => handleSelectedPet()}/> 
            </div>
        </StyledPet>
    )
}

export default Pet
