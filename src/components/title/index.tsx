import React from "react";
import titleLogo from "../../images/titleLogo/titleLogo.png"

export const Title: React.FC = () => {
    return (
        <div>
            <img alt="Conan, O Bárbaro" src={titleLogo} style={{width: "100%", background: "white"}}/>
        </div>
    )
}
