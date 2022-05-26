import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="meme-form">
                <input 
                    type="text"
                    placeholder="top text"
                    className="form--input" 
                />
                <input 
                    type="text"
                    placeholder="bottom text"
                    className="form--input" 
                 />
                <button className="form--btn">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}