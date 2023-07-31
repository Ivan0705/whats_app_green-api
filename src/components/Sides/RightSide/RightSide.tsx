import smile from "../../../images/smile.png";
import clip from "../../../images/clip.jpg";
import voice from "../../../images/voice.png";
import React, {FC} from "react";
import side from './RightSide.module.css'
import {RightSideProps} from "../../../Model/Types";
import {Message} from "../../Message/Message";

export const RightSide: FC<RightSideProps> = ({listContacts, listMessages, contactId, message, setMessage, sendMessage}) => {
    return (
        <div className={side["right-side"]}>
            {listContacts.length === 0 ? <div className={side["right-side_chat-empty"]}/> :
                <div className={side["right-side_chat"]}>
                    {listMessages.map((m: any, ind: number) => {
                        return <Message key={ind} m={m} ind={ind} contactId={contactId}/>

                    })}
                    <div className={side["right-side_add-message"]}>
                        <div className={side["right-side_wrapper"]}>
                            <div><img className={side["right-side_smile"]} src={smile} alt={'smile'}/></div>
                            <div><img className={side["right-side_clip"]} src={clip} alt={'clip'}/></div>
                            <input type={'text'} className={side["right-side_input-messenger"]}
                                   placeholder={'Введите сообщение'}
                                   value={message} name={'message'}
                                   onChange={(event: any) => setMessage(event.target.value)}
                                   onKeyDown={sendMessage}
                            />
                            <div><img className={side["right-side_voice"]} src={voice} alt={'voice'}/></div>
                        </div>
                    </div>
                </div>}
        </div>
    )
};
