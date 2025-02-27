import operations from "../data/operations.json";
import {OperationCollection} from "../types.ts";

const OperationList = () => {
    const operationData = operations as OperationCollection;

    return (
      <div className={ "operation-list"}>
          <h2>Standard Matrix Operations</h2>
          <ul className="item-grid">
              {Object.entries(operationData).sort().map(([key, _operation]) => (
                  <li key={key} className="item-card">
                      <span className="deck-name">{key}</span>
                  </li>
              ))}
          </ul>
      </div>
    );
}

export default OperationList;