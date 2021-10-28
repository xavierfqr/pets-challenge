import React from 'react';
import styled from 'styled-components';
import Pet from './Pet';
import { useSelector } from 'react-redux';
import { RootState } from '..';

const StyledPets = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-row: auto;
    grid-template-columns: repeat(2, 1fr);
`

function PetList() {
    const {isLoading, filteredPets} = useSelector((state: RootState) => state.petReducer);

    return (
        <div>
            <StyledPets>
                {!isLoading ?
                    filteredPets.map((pet: IPet) => 
                        <Pet key={pet.id} {...pet}/>
                    ) : <div>Loading</div>
                }
            </StyledPets>
        </div>
    )
}

export default PetList
