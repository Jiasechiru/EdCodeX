import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';

const RegAuth = () => {
    const [panelActive, setPanelActive] = useState("container");
    useEffect(() => {
        const container: HTMLElement | null = document.getElementById("container");
        const overlayCon: HTMLElement | null = document.getElementById("overlayCon");
        const overlayBtn: HTMLElement | null = document.getElementById("overlayBtn");


        overlayBtn?.addEventListener("click", BtnClick)
        function BtnClick() {
            panelActive === "container right-panel-active" ? setPanelActive("container") : setPanelActive("container right-panel-active")
            overlayBtn?.classList.remove("btnScaled");
            window.requestAnimationFrame(() => {
                overlayBtn?.classList.add("btnScaled");
            })
        }
        console.log('Компонент смонтирован');
        return () => {
            overlayBtn?.removeEventListener("click", BtnClick)
        };
    }, [panelActive]);


    useEffect(() => {
        const styleSheet = document.createElement('style');
        document.head.appendChild(styleSheet);
        styleSheet.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Chakra Petch', sans-serif;
        }
        
        :root {
            --linear-grad: linear-gradient(to right, #141E30, #243B55);
            --grad-clr1: #141E30;
            --grad-clr2: #243B55;
        }
        
        .AuthFormArea {
            height: 94vh;
            background: #eeeeee;
            display: grid;
            place-content: center;
            font-family: 'Chakra Petch', sans-serif;
            background-image: url("../../assets/BGBG.png");
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }
        
        .container{
            position: relative;
            width: 850px;
            height: 500px;
            background-color: white;
            -webkit-box-shadow: 0px 0px 30px 10px #5557;
            -moz-box-shadow: 0px 0px 30px 10px #5557;
            box-shadow: 0px 0px 30px 10px #5557;
            border-radius: 13px;
            overflow: hidden;
        }
        
        .form-container{
            position: absolute;
            width:  60%;
            height: 100%;
            padding: 0px 40px;
            transition: all 0.6s ease-in-out;
        }
        
        .sign-up-container{
            opacity: 0;
            z-index: 1;
        }
        
        .sign-in-container{
            z-index: 2;
        }
        
        form{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0px 50px;
        }
        
        h1{
            color: #42013F;
        }
        
        span{
            font-size: 12px;
            color: #42013F;
        }
        
        .infield{
            position: relative;
            margin: 8px 0px;
            width: 100%;
        }
        
        input{
            width: 100%;
            padding: 12px 8px;
            background-color: #f3f3f3;
            border: none;
            outline: none;
        }
        
        label{
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
            width: 0%;
            height: 2px;
            background: linear-gradient(to right, #141E30, #243B55);
            transition: 0.3s;
        }
        
        input:focus ~ label {
            width: 100%;
        }
        
        a{
            color: #333;
            font-size: 14px;
            text-decoration: none;
            margin: 15px 0px;
        }
        a.forgot{
            padding-bottom: 3px;
            border-bottom: 2px solid #EEE;
        }
        
        button{
            border-radius: 20px;
            border: 1px solid #141E30;
            background: #42013F;
            color: #FFF;
            font-size: 12px;
            font-weight: bold;
            padding: 12px 45px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        
        .form-container button{
            margin: 17px;
            transition: 80ms ease-in;
        }
        
        .form-container button:hover{
            background: #FFF;
            color: #141E30;
        
        }
        
        .overlay-container{
            position: absolute;
            top: 0;
            left: 60%;
            width: 40%;
            height: 100%;
            overflow: hidden;
            transition: transform 0.6s ease-in-out;
            z-index: 9;
        }
        
        
        #overlayBtn{
            cursor: pointer;
            position: absolute;
            left: 50%;
            top: 304px;
            transform: translateX(-50%);
            width: 143.67px;
            height: 40px;
            border: 1px solid #FFF;
            background: transparent;
            border-radius: 20px;
        }
        
        .overlay{
            position: relative;
            background:#42013F;
            color: #FFF;
            left: -150%;
            height: 100%;
            width: 250%;
            transition: transform 0.6s ease-in-out;
        
        }
        
        .overlay-panel{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0px 40px;
            text-align: center;
            height: 100%;
            width: 340px;
            transition: 0.6s ease-in-out;
        }
        .overlay-left{
            right: 60%;
            transform: translateX(-12%) translateY(0%);
        
        }
        
        .overlay-right{
            right: 0;
            transform: translateX(0%) translateY(0.5%);
        }
        
        .overlay-panel h1{
            background-image: linear-gradient(to right, #FF9A00, #25EAA9);
            -webkit-background-clip: text;
            color: transparent;
        }
        
        p{
            font-size: 14px;
            font-weight: 300;
            line-height: 20px;
            letter-spacing: 0.5px;
            margin: 25px 0px 35px;
        }
        
        .overlay-panel button{
            border: none;
            background-color: transparent;
        }
        
        .right-panel-active .overlay-container{
            transform: translateX(-150%);
        }
        
        .right-panel-active .overlay{
            transform: translateX(50%);
        }
        
        .right-panel-active .overlay-left{
            transform: translateX(25%) translateY(0.5%);
        }
        
        .right-panel-active .overlay-right{
            transform: translateX(35%);
        }
        
        .right-panel-active .sign-in-container{
            transform: translateX(20%);
            opacity: 0;
        }
        
        .right-panel-active .sign-up-container{
            transform: translateX(66.7%);
            opacity: 1;
            z-index: 5;
            animation: show 0.6s;
        }
        
        @keyframes show {
            0%, 50% {
                opacity: 0;
                z-index: 1;
            }
            50.1%, 100% {
                opacity: 1;
                z-index: 5;
        
            }
        }
        
        .btnScaled{
            animation: scaleBtn 0.6s;
        }
        
        @keyframes scaleBtn{
            0%{
                width: 143.67px;
            }
            50%{
                width: 250px;
            }
            100%{
                width: 143.67px;
            }
        }
        
        `;

        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    async function SignIn(event: React.FormEvent) {
        event.preventDefault();
        const form = document.getElementById("SignInForm");
        const data = Object.fromEntries(new FormData(form));
        console.log(data);
        const res = await fetch("http://localhost:3000/api/authentication", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (res.ok) {
            // window.location.assign('/')
        } else {
            const data = await res.json()
            alert(data.message)
        }

    }

    async function SignUp(event: React.FormEvent) {
        event.preventDefault();
        const form = document.getElementById("SignUpForm");
        const data = Object.fromEntries(new FormData(form));
        console.log(data);
        const res = await fetch("http://localhost:3000/api/registration", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(res);
        if (res.ok) {
            // window.location.assign('/')
        } else {
            const data = await res.json()
            alert(data.message)
        }

    }
    return (
        <>
            <NavBar />
            <div className="AuthFormArea">
                <div className={panelActive} id="container">
                    <div className="form-container sign-up-container">
                        <form action="#" id='SignUpForm'>
                            <h1>Create Account</h1>
                            <span>Use your email for registration</span>
                            <div className="infield">
                                <input type="text" placeholder="Nickname" name='nickname' />
                                <label></label>
                            </div>
                            <div className="infield">
                                <input type="email" placeholder="Email" name="email" />
                                <label></label>
                            </div>
                            <div className="infield">
                                <input type="password" placeholder="Password" name="password1" />
                                <label></label>
                            </div>
                            <div className="infield">
                                <input type="password" placeholder="Password" name="password2" />
                                <label></label>
                            </div>
                            <button onClick={SignUp}>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#" id='SignInForm'>
                            <h1>Sign in</h1>
                            <span>Use your account</span>
                            <div className="infield">
                                <input type="email" placeholder="Email" name="email" />
                                <label></label>
                            </div>
                            <div className="infield">
                                <input type="password" placeholder="Password" name='password' />
                                <label></label>
                            </div>
                            <a href="#" className="forgot">Forgot your password?</a>
                            <button onClick={SignIn}>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container" id="overlayCon">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button>Sign Up</button>
                            </div>
                        </div>
                        <button id="overlayBtn"></button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default RegAuth;