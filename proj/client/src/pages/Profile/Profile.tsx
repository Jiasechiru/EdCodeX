import React from "react";
import style from "./Profile.module.css";
import messageIcon from "./imgs/Message_fillmessage.png"
import logotop from "./imgs/LogoTop.svg"

const Profile = () => {

    return (
        <>
            <header className={style["profile-header"]}>
                <div>
                    <img src={logotop} />
                    <div>
                        <a><img src={messageIcon} /></a>
                        <a><img /></a>
                        <a><img /></a>
                        <a><img /></a>
                        <a><img /></a>
                    </div>
                </div>
            </header>
            <main className={style["main-container"]}>
                <nav>
                    <div>
                        <a><img />Home</a>
                        <a><img />Tasks</a>
                        <a><img />Theory</a>
                        <a><img />Forums</a>
                        <a><img />Raits</a>
                    </div>
                    <div>
                        <a><img />Hide panel</a>
                    </div>
                </nav>
                <article className={style["article-container"]}>
                    <div className={style["profile-info-top"]}>
                        <div className={style["profile-ava"]}><img /></div>
                        <div className={style["profile-info"]}>
                            <div>
                                <h2 className={style["profile-nickname"]}>NickName DsjafsdIasechiru</h2>
                                <p className={style["profile-mail"]}>aboba@gmail.com</p>
                            </div>
                            <div className={style["score-container"]}>
                                <div className={style["score-bar"]}><p className={style["score-number"]}>4673</p><p className={style["score-name"]}>Score</p></div>
                                <div className={style["score-bar"]}><p className={style["score-number"]}>67546</p><p className={style["score-name"]}>Rank</p></div>
                                <div className={style["score-bar"]}><p className={style["score-number"]}>4</p><p className={style["score-name"]}>Friends Rank</p></div>
                            </div>
                        </div>
                        <div>
                            <button>Edit</button>
                            <button><img /></button>
                        </div>
                    </div>
                    <div>
                        <h2>Learning progress</h2>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>Top friends</div>
                    </div>
                    <div>
                        <h2>Tasks progress</h2>
                        <p>progress bars map</p>
                    </div>
                </article>
                <aside className={style["aside-block"]}>
                </aside>
            </main>
        </>
    )
}

export default Profile;