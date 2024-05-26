import React from "react";
import logog from "./Logo.png"

const NavBar = () => {

    return (
        <header>
            <div className="LogoArea">
                <a href="/"><img src={logog} alt="Logo" id="HeaderLogoImg"></img><span>EdCodeX</span></a>
            </div>
            <div className="NavBar">
                <ul>
                    <li><a href="/a">Tasks</a></li>
                    <li><a>Theory</a></li>
                    <li><a>Forums</a></li>
                    <li><a>About us</a></li>
                </ul>
            </div>
            <div className="ProfileArea">
                <a href="/"><img src="../../assets/ProfileDefault.png" alt="Profile Image" id="HeaderProfileImg"></img></a>
            </div>
        </header>
    )
}

export default NavBar;