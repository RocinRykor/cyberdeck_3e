import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DeckList from './components/DeckList';
import DeckDetail from './components/DeckDetail';
import UtilityList from "./components/UtilityList.tsx";
import UtilityDetail from "./components/UtilityDetail.tsx";
import OperationList from "./components/OperationList.tsx";

function App() {
    return (
        <Router>
            <div className="cyber-container">
                <nav className="main-menu">
                    <h1>Cyberdeck Database</h1>
                    <div className="menu-options">
                        <Link to="/" className="menu-item">Deck List</Link>
                        <Link to="/programs" className="menu-item">Utilities</Link>
                        <Link to="/operations" className="menu-item">Operations</Link>
                        {/* Add more links here as features grow */}
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<DeckList />} />
                    <Route path="/deck/:deckName" element={<DeckDetail />} />
                    <Route path="/programs" element={<UtilityList />} />
                    <Route path="/program/:utilityName" element={<UtilityDetail />} />
                    <Route path="/operations" element={<OperationList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;