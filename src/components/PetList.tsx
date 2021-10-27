import React from 'react';
import styled from 'styled-components';
import Pet from './Pet';
import { useSelector } from 'react-redux';
import { RootState } from '..';

const StyledPets = styled.div`
    display:flex;
    flex-wrap: wrap;
`

function PetList() {
    const {isLoading, filteredPets} = useSelector((state: RootState) => state.petReducer);
    console.log(isLoading)
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
