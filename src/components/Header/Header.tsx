import * as React from "react";
import {FC} from "react";
import profile from "../../images/profile.png";
import header from './Header.module.css'
import {ContactsProps} from "../../Model/Types";

export const Header: FC<ContactsProps> = ({listContacts, contactId}) => {
    return (
        <div className={header.header}>
            <div className={header.header_contacts}>
                <div className={header.header_img}>
                    <img className={header.profile}
                         src={profile}
                         alt={'profile'}/>

                </div>
            </div>
            <div className={header.header_chat}>
                <div className={header.header_chat_img}>
                    {listContacts.length === 0 ? '' : <img className={header.profile}
                                                           src={profile}
                                                           alt={'profile'}/>}
                </div>
                <div>
                    <div className={header.header_chat_name}>
                        {listContacts.length > 0 ? listContacts[contactId].contact : ''}
                    </div>
                </div>
            </div>

        </div>
    )
};
