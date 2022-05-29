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

    const handleChange = (event) => {
        setMeme(prevMeme => {
            const { name, value } = event.target
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()   
    }
    
    return (
        <main>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="top text"
                    className="form--input" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="bottom text"
                    className="form--input"
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handleChange} 
                 />
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <div className="meme">
                <img src={meme.imageSrc} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}