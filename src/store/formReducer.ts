import {FormEnum} from "../Model/Enums/collectionEnums";
import {FormAction} from "../Model/Types";
import {DataFormInterfaceState} from "../Model/Interfaces/collectionInterfaces";

const initialState: DataFormInterfaceState = {
    dataForm: []
};

export const formReducer = (state = initialState, action: FormAction) => {
    switch (action.type) {
        case FormEnum.ADD_REGISTRATION:
            return {...state, dataForm: [...state.dataForm, action.payload]};
        default:
            return state;
    }
};
