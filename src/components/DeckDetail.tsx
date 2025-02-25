import { useParams } from 'react-router-dom';
import decks from '../data/decks.json';
import { DeckCollection, DeckData } from '../types';

const DeckDetail = () => {
    const { deckName } = useParams<{ deckName: string }>();
    const deckData = decks as DeckCollection;
    const decodedName = decodeURIComponent(deckName || '');
    const deck: DeckData | undefined = deckData[decodedName];

    if (!deck) return <div>Deck not found</div>;

    return (
        <div className="deck-detail">
            <h2>{deck.display_name}</h2>
            <div className="spec-grid">
                <div className="spec-item">
                    <label>Rating</label>
                    <span>MPCP-{deck.deck_rating}</span>
                </div>
                <div className="spec-item">
                    <label>Hardening</label>
                    <span>{deck.hardening}</span>
                </div>
                <div className="spec-item">
                    <label>Active Memory</label>
                    <span>{deck.active_memory} MP</span>
                </div>
                <div className="spec-item">
                    <label>Storage Memory</label>
                    <span>{deck.storage_memory} MP</span>
                </div>
                <div className="spec-item">
                    <label>I/O Speed</label>
                    <span>{deck.io_speed} Mbps</span>
                </div>
                <div className="spec-item">
                    <label>Response Increase</label>
                    <span>{deck.response_increase}</span>
                </div>
                <div className="spec-item">
                    <label>Cost</label>
                    <span>{deck.cost.toLocaleString()}¥</span>
                </div>
                {/* Add more fields as needed */}
            </div>
            <div className="source-info">
                Source: {deck.source}
            </div>
        </div>
    );
};

export default DeckDetail;