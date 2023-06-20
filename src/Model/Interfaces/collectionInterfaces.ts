import {Contact, DataForm, Message} from "../Types";
import {ContactEnum, FormEnum, MessageEnum} from "../Enums/collectionEnums";

export interface ContactsInterfaceState {
    contacts: Array<Contact>
}

export interface MessageInterfaceState {
    messages: Array<Message>
}

export interface DataFormInterfaceState {
    dataForm: Array<DataForm>
}

export interface addContactInterface {
    type: ContactEnum.ADD_CONTACT,
    payload: Contact
}

export interface sendMessageInterface {
    type: MessageEnum.SEND_MESSAGE,
    payload: Message
}

export interface registrationInterface {
    type: FormEnum.ADD_REGISTRATION
    payload: DataForm
}
