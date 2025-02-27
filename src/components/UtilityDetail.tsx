import { useParams } from 'react-router-dom';
import utilities from "../data/utilities.ts";
import {UtilityCollection, CyberdeckUtility} from "../types.ts";

const UtilityDetail = () => {
    const { utilityName } = useParams<{ utilityName: string }>();
    const utilityData = utilities as UtilityCollection;
    const decodedName = decodeURIComponent(utilityName || '');
    const utility: CyberdeckUtility | undefined = utilityData[decodedName];

    if (!utility) return <div>Utility not found</div>;

    return (
        <div className="deck-detail">
            <h2>{utilityName}</h2>
            <div className="spec-grid">
                <div className="spec-item">
                    <label>Target Operation</label>
                    <span>{utility.target_operation}</span>
                </div>
                <div className="spec-item">
                    <label>Description</label>
                    <span>{utility.description}</span>
                </div>
                <div className="spec-item">
                    <label>Type</label>
                    <span>{utility.type}</span>
                </div>
                <div className="spec-item">
                    <label>Multiplier</label>
                    <span>x{utility.multiplier}</span>
                </div>
            </div>
        </div>
    );
};

export default UtilityDetail;