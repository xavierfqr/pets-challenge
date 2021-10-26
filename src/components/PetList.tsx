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
            {pets.map((pet : any, index : number) => 
                <Pet key={index} {...pet} index={index}/>
            )}
        </StyledPets>

    )
}

export default PetList
