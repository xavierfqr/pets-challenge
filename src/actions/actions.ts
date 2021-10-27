import { ADD_PET, REMOVE_PET } from "./ActionTypes";

export function addPet(pet: IPet) : PetAction{
    console.log("add")
    return {
        type: ADD_PET,
        payload: pet,
    }
}

export function removePet(pet: IPet) : PetAction{
    return {
        type: REMOVE_PET,
        payload: pet.id,
    }
}