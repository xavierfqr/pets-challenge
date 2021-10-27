import { REMOVE_DOWNLOAD_PET, ADD_DOWNLOAD_PET, FETCH_PETS, FILTER_PETS, DOWNLOAD_ALL_PETS, REMOVE_ALL_PETS } from "./actionTypes";
import petsServices from "../services/pets-services";

export const fetchProducts = () => (dispatch: any) => {
    petsServices.getAll().then(
        response => {
            const petList = response.data.map((pet : IPet, index : number) => ({...pet, id: index, shouldDownload: false}));
            return dispatch({
                type: FETCH_PETS,
                payload: petList
            })
        }
    )
}

export function addDownloadPet(pet: IPet) : PetAction {
    return {
        type: ADD_DOWNLOAD_PET,
        payload: pet,
    }
}

export function downloadAllPets() : PetAction {
    return {
        type: DOWNLOAD_ALL_PETS,
        payload: null
    }
}

export function removeDownloadPet(pet: IPet) : PetAction {
    return {
        type: REMOVE_DOWNLOAD_PET,
        payload: pet.id,
    }
}

export function removeAllPets() : PetAction {
    return {
        type: REMOVE_ALL_PETS,
        payload: null
    }
}

export function filterPets(petList: IPet[], option: string, input: string) : PetAction{
    return {
        type: FILTER_PETS,
        payload: petList.filter((pet: any) => {
            return pet[option].includes(input);
        })
    }
}