import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./HelloPage.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


const HelloPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/registration');
    };
    return (
        <>
            <NavBar />
            <main className={style["main-hellopage"]}>
                <div className={style["submain-hellopage"]}>
                    <div className={style["big-containers"]}>
                        <div className={style["first-container-hellopage"]}>
                            <div>
                                <p className={style["main-words-hellopage"]}>Improve your skills by <span className={style["orange-span"]}>..</span> <span className={style["orange-span"]}>#</span>challenge <span className={style["green-span"]}>_</span></p>
                                <p className={style["sub-words-hellopage"]}>Learn to code and improve your skills with the most interesting tasks and challenges to make your style better</p>
                            </div>
                            <div className={style["button-container"]}>
                                <button className={style["login-button"]} onClick={handleClick}>Log In</button>
                                <button className={style["tryforfree-button"]} onClick={handleClick}>Try for free</button>
                            </div>
                        </div>
                    </div>
                    <div className={style["big-containers"]}>
                        <p className={style["secondbigcontainer-firtsword"]}>EdCodeX for you if you like</p>
                        <div className={style["small-boxes-container"]}>
                            <div className={style["small-boxes-container-div"]}><p className={style["small-boxes-container-div-p"]}>Solve problems and gain experience in software development</p><img src="/favorite_outline-vk.svg" /></div>
                            <div className={style["small-boxes-container-div"]}><p className={style["small-boxes-container-div-p"]}>Create tasks yourself and get feedback along with experience</p><img src="/narrative_outline-vk.svg" /></div>
                            <div className={style["small-boxes-container-div"]}><p className={style["small-boxes-container-div-p"]}>Connect with the community and find a solution together.</p><img src="/message_outline-vk.svg" /></div>
                            <div className={style["small-boxes-container-div"]}><p className={style["small-boxes-container-div-p"]}>Watch the theory and study online with us</p><img src="/laptop-google.svg" /></div>
                        </div>
                    </div>
                    <div className={style["big-containers"]}>
                        <div className={style["third-container-hellopage"]}>
                            <div className={style["third-container-hellopage-firstword"]}><p>An engaged software development community</p></div>
                            <div className={style["third-container-hellopage-subword"]}><p>Codewars is a collective effort by its users. They are creators—authoring kata to teach various techniques, solving kata with solutions that enlighten others, and commenting with constructive feedback.</p></div>
                            <div className={style["colored-div-statics"]}>
                                <div> <p className={style["big-statics"]}>+75k</p> <p className={style["small-statics"]}>Community members added every month</p> </div>
                                <div> <p className={style["big-statics"]}>1M+</p> <p className={style["small-statics"]}>Community members added every month</p> </div>
                                <div> <p className={style["big-statics"]}>12K+</p> <p className={style["small-statics"]}>Kata created by our community</p> </div>
                            </div>
                        </div>
                    </div>
                    <div className={style["big-containers"]}>
                        <div className={style["last-container-hellopage"]}>
                            <div className={style["last-container-boxes"]}><p>Learn different programming languages, solve problems and develop</p><img src="./Second-statics.svg" /></div>
                            <div className={style["last-container-boxes"]}><p>Learn different programming languages, solve problems and develop</p><img src="./First-statics.svg" /></div>
                            <div className={style["last-container-boxes"]}><p>Chat with other students, make new friends with similar interests</p><img src="./Third-statics.svg" /></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HelloPage;