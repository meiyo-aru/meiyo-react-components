import type React from "react";
import style from "./Button.module.scss"

interface ButtonProps {
    text: string,
    onClick?: React.MouseEventHandler,
    onMouseEnter?: React.MouseEventHandler,
    onMouseLeave?: React.MouseEventHandler,
    disabled?: boolean,
    type?: "primary" | "secondary" | "success" | "danger" | "warning",
    boxShadow?: boolean,
    hover?: boolean,
}

export const Button: React.FC<ButtonProps> = ({
    ...props
}) => {

    let type = style.primary;
    switch (props.type) {
        case "secondary":
            type = style.secondary;
            break;
        case "success":
            type = style.success;
            break;
        case "danger":
            type = style.danger;
            break;
        case "warning":
            type = style.warning;    
            break;
        default:
            break;
    }

    return (
        
            props.disabled ?
                    <button disabled={props.disabled}  className={`${style.disabled}`}>Disabled</button>
                :
                    <button 
                    className={`${type} ${props.boxShadow && style.shadow} ${props.hover && style.hover}`} 
                    onClick={props.onClick} 
                    onMouseEnter={props.onMouseEnter} 
                    onMouseLeave={props.onMouseLeave}
                    disabled={props.disabled}>
                        {props.text}
                    </button>
        
    );
};
