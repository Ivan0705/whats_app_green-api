import profile from "../../images/profile.png";
import React, {FC} from "react";
import contact from './Contact.module.css'
import {ContactProps} from "../../Model/Types";

export const Contact: FC<ContactProps> = ({c, ind, openChat}) => {
    return (
        <div key={ind} className={contact.contact}>
            <div><img className={contact.profile}
                      src={profile}
                      alt={'profile'}/>
            </div>
            <div className={contact.profile_info}>
                <div className={contact.profile_header}>
                    <div className={contact.profile_name}
                         onClick={() => openChat(c.contactId)}>{c.contact}
                    </div>
                </div>
            </div>
        </div>
    )
};
