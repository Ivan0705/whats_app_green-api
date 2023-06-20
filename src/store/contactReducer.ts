import {ContactsInterfaceState} from "../Model/Interfaces/collectionInterfaces";
import {ContactEnum} from "../Model/Enums/collectionEnums";
import {ContactAction} from "../Model/Types";

const initialState: ContactsInterfaceState = {
    contacts: []
};

const contactsReducer = (state = initialState, action: ContactAction): ContactsInterfaceState => {
    switch (action.type) {
        case ContactEnum.ADD_CONTACT:
            return {...state, contacts: [...state.contacts, action.payload]};
        default:
            return state;
    }
};

export default contactsReducer;
