import React from "react"
import logo from "../images/logo.svg"

export default function Header() {
    return (
        <nav>
            <div className="logo">
                <a href="index.html">
                    <img src={logo} alt="app-logo"></img>
                    Meme Generator
                </a>
            </div>
            <p>React Course - Project 3</p>
        </nav>
    )
}