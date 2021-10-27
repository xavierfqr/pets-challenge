import { ADD_PET, REMOVE_PET } from "../actions/ActionTypes"

const initalState: PetState = Array<IPet>();

const petReducer = (state: PetState = initalState, action: PetAction) : PetState => {
    console.log("before :", state);
    switch(action.type){
        case ADD_PET:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_PET:
            return [
                ...state.filter(pet => pet.id !== action.payload)
            ]
        default:
            return state;
    }
}

export default petReducer;