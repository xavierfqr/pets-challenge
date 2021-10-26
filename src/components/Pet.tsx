import React from 'react'
import styled from 'styled-components';

interface PetProps {
    created: string,
    description: string,
    title: string,
    url: string,
    index: number
}


const StyledImage = styled.img<any>`
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


function Pet({created, description, title, url, index} : PetProps) {
    const [isSelected, setIsSelected] = React.useState(false)
    const formattedDate = new Date(created).toLocaleString();
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
