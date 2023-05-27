import {IdError} from "../Error/IdError";
import {TokenError} from "../Error/TokenError";
import * as React from "react";
import {FC} from "react";
import form from './Form.module.css'
import {FormRegistrationProps} from "../../Model/Types";

export const FormRegistration: FC<FormRegistrationProps> = ({idInstance, handleChange, apiTokenInstance, error, add}) => {
    return (
        <div className={form.my_form}>
            <div>
                <div>
                    <div>{error && <IdError/>}
                        <input
                            className={form.input_form}
                            type="text"
                            placeholder="Введите idInstance"
                            name="idInstance"
                            value={idInstance}
                            onChange={handleChange}
                        />
                        {error && <TokenError/>}
                        <input
                            className={form.input_form}
                            type="text"
                            placeholder="Введите apiTokenInstance"
                            name="apiTokenInstance"
                            value={apiTokenInstance}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button className={form.button_form} onClick={add}>Подтвердить</button>
            </div>
        </div>
    )
}
