import { memo } from "react";
import "./Loading.css"

const LoadingSpin = memo(() => {
    return (
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    );
});

LoadingSpin.displayName = 'LoadingSpin';

export default LoadingSpin;
