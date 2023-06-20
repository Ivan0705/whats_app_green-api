import {Contact, DataForm, Message} from "../../Model/Types";
import {ContactEnum, FormEnum, MessageEnum} from "../../Model/Enums/collectionEnums";


export const addContactAction = (contact: Contact) => {
    return {type: ContactEnum.ADD_CONTACT, payload: contact}
};

export const sendMessageAction = (message: Message) => {
    return {type: MessageEnum.SEND_MESSAGE, payload: message}
};

export const registrationAction = (form: DataForm) => {
    return {type: FormEnum.ADD_REGISTRATION, payload: form}
};
