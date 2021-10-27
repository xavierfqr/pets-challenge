import React from 'react'
import styled from 'styled-components'
import Pet from './Pet'

const StyledPets = styled.div`
    display:flex;
    flex-wrap: wrap;
`

function PetList({pets} : any) {
    return (
        <StyledPets>
            {pets.map((pet: IPet) => 
                <Pet key={pet.id} {...pet}/>
            )}
        </StyledPets>
    )
}

export default PetList
