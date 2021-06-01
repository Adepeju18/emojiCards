import './App.css';
 import emojis from "./data.js"
 import EmojiCard from "./EmojiCard";
//  import Keywords from './Keywords';
//  import Emoji from './Emoji';


// const sampleEmoji =   {
//     "title": "Grinning",
//     "symbol": "😀",
//     "keywords": "grinning face happy smiley emotion emotion"
// };


function App() {
    return (
        <div className="App">
            <h1>Emojis</h1>
            <div className="row">
                {emojis.map((emoji)=>(
                    <EmojiCard  emoji={emoji} />
                ))}
                

            </div>
            
            
            
        </div>
    );
}

export default App;
