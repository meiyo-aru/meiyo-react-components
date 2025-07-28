import type React from "react";
import style from "./Button.module.scss"

interface ButtonProps {
    text: string,
    onClick?: React.MouseEventHandler,
    onMouseEnter?: React.MouseEventHandler,
    onMouseLeave?: React.MouseEventHandler,
    disabled?: boolean,
    type?: "primary" | "secondary" | "success" | "danger" | "warning",
    size?: "sm" | "md" | "lg",
    shadow?: boolean,
    transform?: boolean,
    backgroundColor?: string
}

export const Button: React.FC<ButtonProps> = ({
    ...props
}) => {

    const buttonClasses = [
        props.type ? style[props.type] : style.primary,
        props.size ? style[props.size] : style.md,
        props.shadow && style.shadow,
        props.transform && style.transform
    ].filter(Boolean).join(" ")

/*     let type = style.primary;
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
 */
    return (
            
            props.disabled ?
                    <button disabled className={`${style.disabled} ${style[props.size ? props.size : "md"]}`}>Disabled</button>
                :
                    <button 
                    style={{backgroundColor: props.backgroundColor}}
                    className={buttonClasses}
                    onClick={props.onClick} 
                    onMouseEnter={props.onMouseEnter} 
                    onMouseLeave={props.onMouseLeave}
                    disabled={props.disabled}>
                        {props.text}
                    </button>
        
    );
};
