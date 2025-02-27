import {Link} from 'react-router-dom';
import decks from '../data/decks.json';
import {DeckCollection} from '../types';

const DeckList = () => {
    const deckData = decks as DeckCollection;

    return (
        <div className="deck-list">
            <h2>Standard Cyberdecks</h2>
            <ul className="item-grid">
                {Object.entries(deckData).map(([key, deck]) => (
                    <Link to={`/deck/${encodeURIComponent(key)}`}>
                        <li key={key} className="item-card">
                            <span className="deck-name">{deck.display_name}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default DeckList;