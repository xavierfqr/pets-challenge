import React, { useEffect } from 'react'
import styled from 'styled-components';
import { addPet, removePet } from '../actions/actions';
import {useDispatch} from 'react-redux';


interface ImageProps {
    selected: boolean
}

const StyledImage = styled.img<ImageProps>`
    width: 250px;
    height: 200px;
    opacity: ${p => p.selected ? 0.3 : 1};
    filter:alpha(opacity=50);
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
    const {created, description, title, url, id} = props;
    const [isSelected, setIsSelected] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    // avoid props dependency with useEffect
    const propsRef = React.useRef(props);



    const formattedDate = new Date(created).toLocaleString();


    useEffect(() => {
        if (isSelected)
            dispatch(addPet(propsRef.current));
        else
            dispatch(removePet(propsRef.current));
    }, [isSelected])

    return (
        <StyledPet>
            <div>
                <p>{title}</p>
                <div>{description}</div>
                <i>{formattedDate}</i>
            </div>
            <div>
                <StyledImage src={url} selected={isSelected} onClick={() => setIsSelected(!isSelected)}/> 
            </div>
        </StyledPet>
    )
}

export default Pet
