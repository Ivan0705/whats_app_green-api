import smile from "../../images/smile.png";
import clip from "../../images/clip.jpg";
import voice from "../../images/voice.png";
import React, {FC} from "react";
import {Message} from "../Message/Message";
import side from './Side.module.css'
import {RightSideProps} from "../../Model/Types";

export const RightSide: FC<RightSideProps> = ({listContacts, listMessages, contactId, message, setMessage, sendMessage}) => {
    return (
        <div className={side.right_side}>
            {listContacts.length === 0 ? <div className={side.chat_empty}/> : <div className={side.chat}>
                {listMessages.map((m: any, ind: number) => {
                    return <Message key={ind} m={m} ind={ind} contactId={contactId}/>

                })}
                <div className={side.add_message}>
                    <div className={side.wrapper}>
                        <div><img className={side.block_smile} src={smile} alt={'smile'}/></div>
                        <div><img className={side.block_clip} src={clip} alt={'clip'}/></div>
                        <input type={'text'} className={side.input_messenger} placeholder={'Введите сообщение'}
                               value={message} name={'message'}
                               onChange={(event: any) => setMessage(event.target.value)}
                               onKeyDown={sendMessage}
                        />
                        <div><img className={side.block_voice} src={voice} alt={'voice'}/></div>
                    </div>
                </div>
            </div>}
        </div>
    )
};
