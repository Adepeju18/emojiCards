import React from 'react';
import Emoji from './Emoji';
import Keywords from './Keywords';
const EmojiCard = ({ emoji }) => {
    const { title, symbol, keywords } = emoji;
    return (
        //  <div className="EmojiCard">
            <div className="card card-emoji">
            <h3>{title}</h3>
            <Emoji symbol={symbol} />
            <Keywords keywords={keywords} />
            </div>
        //  </div>
    )
}
export default EmojiCard;