export  type Message = {
    userNameId: String | any,
    message: String | any,
    userName: String | any,
    receiptId: number | any
}

export type Contact = {
    contact: any,
    contactId: any
}
export type LeftSideProps = {
    handleChange1: any,
    addContact: any,
    openChat: (id: number) => any | void,
    contact: String | any,
    listContacts: any[]
}

export type RightSideProps = {
    listContacts: any[],
    listMessages: any[],
    contactId: String,
    message: String | any,
    setMessage: any,
    sendMessage: any
}

export  type FormRegistrationProps = {
    idInstance: String | any,
    handleChange: any,
    apiTokenInstance: String | any,
    error: any,
    add: any
}

export type ContactsProps = {
    listContacts: any[],
    contactId: String | any
}

export type ContactProps = {
    c: any,
    ind: any,
    openChat: any
}

export type PageProps = {
    idInstance: string | any,
    apiTokenInstance: string | any
}

export type MessageProps = {
    m: any,
    ind: any,
    contactId: any
}

