import React from "react";
import error from './Error.module.css'

export const TokenError = () => {
    return (
        <div className={error.error}>
            Введите токен
        </div>
    )
};
