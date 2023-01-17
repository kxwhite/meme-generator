import React, { useState }  from "react";
import memesData from "../memesData"

export default function Meme() {

  const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

  return (
    <main>
      <div className="form">
        <div className="form--inputs">
          <input type="text" placeholder="Text Top" name="topText" value={meme.topText} onChange={handleChange}/>
          <input type="text" placeholder="Text Bottom" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
        </div>
        <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage } className="main--meme-img"/>
        <h3 className="main--meme-text top">{meme.topText}</h3>
        <h3 className="main--meme-text bottom">{meme.bottomText}</h3>
      </div>
    </main>
  )
}
