import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

function Button ({children, ...props} :ButtonProps) {
    return (
		<button {...props}>
			{children}
		</button>
    );
};

export default Button;
