import { filterPets } from "../actions/actions";
import { REMOVE_DOWNLOAD_PET, ADD_DOWNLOAD_PET, FETCH_PETS, FILTER_PETS, DOWNLOAD_ALL_PETS, REMOVE_ALL_PETS } from "../actions/actionTypes"

interface IStore {
    pets: IPet[],
    isLoading: boolean,
    filteredPets: IPet[],
}

const initalState: IStore = { pets: [], isLoading: true, filteredPets: []};

const petReducer = (state: IStore = initalState, action: PetAction) : IStore => {
    switch(action.type){
        case FETCH_PETS: {
            return {
                ...state,
                pets: action.payload,
                filteredPets: action.payload
            }
        }
        case ADD_DOWNLOAD_PET: {
            const petsCopy = [...state.filteredPets];
            petsCopy[action.payload.id].shouldDownload = true;
            return {
                ...state, 
                filteredPets: petsCopy
            }
        }
        case DOWNLOAD_ALL_PETS: {
            let petsCopy = [...state.filteredPets];
            petsCopy = petsCopy.map(pet => {
                pet.shouldDownload = true;
                return pet;
            });
            return {
                ...state, 
                filteredPets: petsCopy
            }
        }
        case REMOVE_DOWNLOAD_PET: {
            const petsCopy = [...state.filteredPets];
            petsCopy[action.payload].shouldDownload = false;
            return {
                ...state,
                filteredPets: petsCopy
            }
        }
        case REMOVE_ALL_PETS: {
            let petsCopy = [...state.filteredPets];
            petsCopy = petsCopy.map(pet => {
                pet.shouldDownload = false;
                return pet;
            });
            return {
                ...state, 
                filteredPets: petsCopy
            }
        }
        case FILTER_PETS: {
            return {
                ...state,
                filteredPets: action.payload
            }
        }
        default:
            return state;
    }
}

export default petReducer;