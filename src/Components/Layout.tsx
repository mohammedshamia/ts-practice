import React, {CSSProperties} from 'react';


interface Style extends CSSProperties{
    background: "Blue" | "Red" | "Brown"
}

interface IProps{
    style:Style,
    children:JSX.Element[] | JSX.Element
/** To allow the children to be any type*/
    // children:React.ReactNode
}

function Layout(props:IProps) {
    return (
        <div style={props.style}>
            {props.children}
        </div>
    );
}

export default Layout;