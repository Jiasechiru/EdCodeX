import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style["footer-div"]}>
            <div className={style["main-container"]}>
                <div className={style["second-containers"]}>
                    <img src="./Footer-logo.svg" />
                    <p>Policy regarding the processing of user data</p>
                    <p>Consent to the processing of user data</p>
                    <button>Join</button>
                </div>
                <div className={style["second-containers"]}>
                    <h3>Navigation</h3>
                    <p>Text</p>
                    <p>TextText</p>
                    <p>TextTextText</p>
                    <p>Text</p>
                    <p>TextText</p>
                    <p>TextTextText</p>
                </div>
                <div className={style["second-containers"]}>
                    <h3>Contacts</h3>
                    <p>8 (800) 000 00 00</p>
                    <p>example@1ExCodes.ru</p>
                </div>
                <div className={style["second-containers"]}>
                    <h3>Information</h3>
                    <p>Aboba</p>
                    <p>ИНН</p>
                    <p>ОГРНИП</p>
                    <div>
                        <img />
                        <img />
                        <img />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;