import React from "react"
import memesData from "../memesData"

export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imageSrc: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const getMemeImage = (event) => {
        event.preventDefault();
        const memeArr = memesData.data.memes
        const ranNum = Math.floor(Math.random()*memeArr.length)
        const url = memeArr[ranNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageSrc: url
        }))
    }
    
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
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <div className="meme">
                <img src={meme.imageSrc} className="meme--image" />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}