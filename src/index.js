import React from "react"
import ReactDOM from "react-dom"
import Style from "./style.css"
import Profil from "./icons/profil.png"
import GitHubIcon from "./icons/GitHub Icon.png"
import LinkedinIcon from "./icons/linkedin.png"
import MailIcon from "./icons/mail.png"

function App() {
    return (
        <section className="app">
            <figure>
                <img src={Profil} alt="Anis" className="profil"></img>
            </figure>
            <div className="main">
                <div className="title">
                    <h1>Anis Shadlia</h1>
                    <h2>Frontend Developer</h2>
                    <a href="https://shadlia.com" target="_blank" rel="noreferrer" className="website">shadlia.com</a>
                    <a href="mailto:info@shadlia.com" target="_blank" rel="noreferrer" className="mail"><img src={MailIcon} alt="mail-icon"></img> <span>Email</span></a>
                </div>
                <div className="descreption">
                    <div>
                        <h3>About</h3>
                        <p>
                            I am a frontend developer with a particular interest in making
                            things simple and automating daily tasks. I try to keep up with 
                            security and best practices, and am always looking for new things to learn.
                        </p>
                    </div>
                    <div>
                        <h3>Interests</h3>
                        <p>
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
                        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <a href="https://github.com/Anis-Web" target="_blank" rel="noreferrer"><img src={GitHubIcon} alt="github-icon"></img></a>
                <a href="https://github.com/Anis-Web" target="_blank" rel="noreferrer"><img src={LinkedinIcon} alt="linkedin-icon"></img></a>
                <a href="https://github.com/Anis-Web" target="_blank" rel="noreferrer"><img src={MailIcon} alt="mail-icon"></img></a>
            </div>
        </section>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))