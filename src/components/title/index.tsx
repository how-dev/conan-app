import React from "react";
import titleLogo from "../../images/titleLogo/titleLogo.png"

export const Title: React.FC = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <img alt="Conan, O Bárbaro" src={titleLogo} style={{
                maxWidth: 414,
                width: "100%",
                background: "radial-gradient(white, transparent 70%)",
                marginBottom: 5,
            }}/>
        </div>
    )
}
