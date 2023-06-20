import {MessageInterfaceState} from "../Model/Interfaces/collectionInterfaces";
import {MessageEnum} from "../Model/Enums/collectionEnums";
import {MessageAction} from "../Model/Types";

const initialState: MessageInterfaceState = {
    messages: []
};

export const messageReducer = (state = initialState, action: MessageAction): MessageInterfaceState => {
    switch (action.type) {
        case MessageEnum.SEND_MESSAGE  :
            return {
                ...state, messages: [...state.messages, action.payload]
            };
        default:
            return state;
    }
};
