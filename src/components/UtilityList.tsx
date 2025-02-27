import {Link} from 'react-router-dom';
import {UtilityCollection} from '../types';
import utilities from "../data/utilities.ts";

const DeckList = () => {
    const utilityData = utilities as UtilityCollection;

    return (
        <div className="deck-list">
            <h2>Cyberdeck Utilities</h2>
            <ul className="item-grid">
                {Object.entries(utilityData).sort().map(([key, _utility]) => (
                    <Link to={`/program/${encodeURIComponent(key)}`}>
                        <li key={key} className="item-card">
                            <span className="deck-name">{key}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default DeckList;