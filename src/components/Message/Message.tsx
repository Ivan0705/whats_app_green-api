import React, {FC} from "react";
import message from './Message.module.css'
import {MessageProps} from "../../Model/Types";

export const Message: FC<MessageProps> = ({m, ind, contactId}) => {
    return (
        <div key={ind}
             className={m.userNameId === contactId ? message.my_message : message.message_companion}>
            {m.message}
        </div>
    )
};
