interface IPet {
    created: string,
    description: string,
    title: string,
    url: string,
    id: number
}

type PetState = Array<IPet>;

type PetAction = {
    type: string,
    payload: any
}

type DispatchType = (args: PetAction) => PetAction;