import React from 'react';
import styled from 'styled-components';
import Pet from './Pet';
import { useSelector } from 'react-redux';
import { RootState } from '..';

const StyledPets = styled.div`
    padding-top: 2rem;
    column-count: 2;
`

function PetList() {
    const {isLoading, filteredPets} = useSelector((state: RootState) => state.petReducer);

    return (
        <div>
            <StyledPets>
                {!isLoading ?
                    filteredPets.map((pet: IPet) => 
                        <Pet key={pet.id} {...pet}/>
                    ) : <div>Loading...</div>
                }
            </StyledPets>
        </div>
    )
}

export default PetList
