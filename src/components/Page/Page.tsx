import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {PageProps} from "../../Model/Types";
import {Header} from "../Header/Header";
import {LeftSide} from "../Sides/LeftSide";
import {RightSide} from "../Sides/RightSide";
import page from './Page.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addContactAction, sendMessageAction} from "../../store/actions/actions";
import {getMessageAPI, sendMessageAPI} from "../../api/api";

export const Page: FC<PageProps> = ({idInstance, apiTokenInstance}) => {
    const dispatch = useDispatch();

    const listContacts = useSelector((state: any) => state.contacts.contacts);

    const listMessages = useSelector((state: any) => state.messages.messages);

    const [contact, setContact] = useState<String | any>('');

    const [contactId, setContactId] = useState<String | any>('');

    const [chatId, setChatId] = useState<String>('');

    const [message, setMessage] = useState<String | any>("");

    const [userName, setUserName] = useState<String>('');

    useEffect(() => {
        setTimeout(() => {
            if (idInstance !== '' && apiTokenInstance !== '') {
                getMessageAPI(idInstance, apiTokenInstance)
            }
        }, 300)
    }, []);

    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setContact(event.target.value);
    };
    const isUniqueContact = (listContacts: any, contact: any) => {
        return !listContacts.find(function (c: any) {
            return c.contact == contact;
        });
    };
    const addContact = (event: any): void => {
        const newContact: String | any = {contact: contact, contactId: listContacts.length};

        if (event.key === 'Enter') {
            if (!Number(contact)) {
                alert('Введите номер телефона');
                setContact("");
            } else {
                if (isUniqueContact(listContacts, contact)) {
                    dispatch(addContactAction(newContact));
                    setChatId(contact + '@c.us');
                    setContactId(0);
                    setContact("");
                } else {
                    alert('Номер телефона должен быть уникальным')
                }
            }
        }
    };


    const sendMessage = (e: any) => {
        setUserName(listContacts[contactId].contact);

        const newMessage: any = {
            userNameId: listContacts[contactId].contactId,
            message: message,
            userName: userName,
        };
        if (e.key === 'Enter') {
            dispatch(sendMessageAction(newMessage));
            console.log('chatId: ', chatId);
            console.log('message: ', message);
            // @ts-ignore
            sendMessageAPI(idInstance, apiTokenInstance, chatId, message);
            setMessage('');
        }
    };

    const openChat = (id: number) => {
        return setContactId(listContacts[id].contactId);
    };

    return (
        <div>
            <Header listContacts={listContacts} contactId={contactId}/>
            <div className={page.main_page}>
                <LeftSide handleChange1={handleChange1} addContact={addContact} openChat={openChat} contact={contact}
                          listContacts={listContacts}/>
                <RightSide listContacts={listContacts} listMessages={listMessages} contactId={contactId}
                           message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
};
