import React from 'react';

// type Type="button" | "submit" | "reset" | undefined
export enum Type{
    button = "button" ,
    submit = "submit" ,
    reset = "reset"
}

interface IProps{
    handleClick:()=>void;
    children:string;
    type?:Type
}

function Button(props:IProps) {
    return (
        <button onClick={props.handleClick}
                type={props.type}>
            {props.children}
        </button>
    );
}

export default Button;