import { useState , useEffect, use} from "react";
export default function Main() {
    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "https://imgflip.com/s/meme/One-Does-Not-Simply.jpg"
    });
    const onTopChange = (event) => {
        setMeme(prevMeme => ( { ...prevMeme, topText:event.target.value } ));
    }
    const onBottomChange = (event) => {
        setMeme(prevMeme => ( { ...prevMeme, bottomText:event.target.value } ));
    }
    useEffect(() => { fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(data => { setMeme(prevMeme => ({ ...prevMeme, randomImage: data.data.memes[0].url })); 
                                                                                                                setAllMemes(data.data.memes);   }); }, []);
    return (
        <main className="meme-container">
            <div className="meme-form">
                <div className="form-group">
                    <label htmlFor="top-text">Top Text</label>
                    <input 
                        id="top-text"
                        type="text" 
                        placeholder="One does not simply" 
                        className="text-input"
                        onChange={onTopChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input 
                        id="bottom-text"
                        type="text" 
                        placeholder="Walk into Mordor" 
                        className="text-input"
                        onChange={onBottomChange}
                    />
                </div>
                
                <button className="meme-button" onClick={()=>{ setMeme(prevMeme => ({ ...prevMeme, randomImage: allMemes[Math.floor(Math.random() * allMemes.length)].url })); }}>
                    Get a new meme image 🖼️
                </button>
            </div>
            
            <div className="meme-display">
                <div className="meme-image">
                    <img 
                        src={meme.randomImage} 
                        alt="One does not simply meme"
                    />
                    <div className="meme-top-text">{meme.topText}</div>
                    <div className="meme-bottom-text">{meme.bottomText}</div>
                </div>
            </div>
        </main>
    );
}