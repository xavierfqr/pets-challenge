import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.div`
    background-color: #d9b99b;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    & > a {
        color: gray;
        text-decoration: none;
        margin-left: 1.5rem;
        margin-right: 2rem;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
`

const StyledHomeImage = styled.img`
    object-fit: cover;
    border-radius: 50px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;    
`

function Navbar() {
    return (
        <StyledNavbar>
            <div>
                <Link to="/"><StyledHomeImage src="cat.jpeg" height={50} width={50}></StyledHomeImage></Link>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about-me">About Me</Link>
        </StyledNavbar>
    )
}

export default Navbar
