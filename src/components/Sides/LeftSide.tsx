import React, {FC} from "react";
import side from './Side.module.css'
import {Contact} from "../Contact/Contact";
import {LeftSideProps} from "../../Model/Types";

export const LeftSide: FC<LeftSideProps> = ({handleChange1, addContact, openChat, contact, listContacts}) => {
    return (
        <div className={side.left_side}>
            <div className={side.search}>
                <input className={side.input_search}
                       placeholder={'Введите номер телефона'}
                       onChange={handleChange1}
                       onKeyDown={addContact}
                       name={'contact'}
                       type={'tel'}
                       value={contact}
                />
            </div>
            <div className={side.list_contacts}>
                <div>
                    {listContacts.map((c: any, ind: number) => {
                        return <Contact key={ind} c={c} ind={ind} openChat={openChat}/>
                    })}
                </div>
            </div>
        </div>
    )
};
