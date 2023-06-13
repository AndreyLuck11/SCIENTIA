import "./HoverCard.scss"
import {ReactNode} from "react";
interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
}

function HoverCard ({children}: HoverCardProps) {
    return (
        <div className="card hover-card">
            {children}
        </div>
    );
};

export default HoverCard;
