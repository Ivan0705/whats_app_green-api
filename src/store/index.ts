import {applyMiddleware, combineReducers} from "redux";

import thunk from 'redux-thunk';
import contactsReducer from "./contactReducer";
import {messageReducer} from "./messageReducer";
import {formReducer} from "./formReducer";

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    messages: messageReducer,
    form: formReducer
});

applyMiddleware(thunk);
