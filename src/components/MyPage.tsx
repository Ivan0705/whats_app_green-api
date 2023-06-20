import * as React from "react";
import {ChangeEvent, FC, useState} from "react";
import {FormRegistration} from "./FormRegistration/FormRegistration";
import {Page} from "./Page/Page";
import {useDispatch} from "react-redux";
import {registrationAction} from "../store/actions/actions";

export const MyPage: FC = () => {
    const dispatch = useDispatch();

    const [idInstance, setIdInstance] = useState<String | any>('');
    const [apiTokenInstance, setApiTokenInstance] = useState<String | any>('');
    const [show, setShow] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'idInstance') {
            setIdInstance(event.target.value);
        } else {
            setApiTokenInstance(event.target.value);
        }
    };

    const add = (): void => {
        const newDataForm = {idInstance: idInstance, apiTokenInstance: apiTokenInstance};
        if (idInstance !== '' && apiTokenInstance !== '') {
            dispatch(registrationAction(newDataForm));
            setShow(false);
        } else {
            setError(true);
            setShow(true);
        }
    };

    return (
        <div>{show ?
            <FormRegistration idInstance={idInstance} handleChange={handleChange} apiTokenInstance={apiTokenInstance}
                              error={error} add={add}/> :
            <Page idInstance={idInstance} apiTokenInstance={apiTokenInstance}/>}
        </div>
    );
};
