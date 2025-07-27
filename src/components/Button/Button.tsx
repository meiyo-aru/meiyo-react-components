interface ButtonProps {
    text: string
}

export const Button: React.FC<ButtonProps> = ({
    text
}) => {
    return (
        <button>{text}</button>
    );
};
