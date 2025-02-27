import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DeckList from './components/DeckList';
import DeckDetail from './components/DeckDetail';
import UtilityList from "./components/UtilityList.tsx";
import UtilityDetail from "./components/UtilityDetail.tsx";

function App() {
    return (
        <Router>
            <div className="cyber-container">
                <nav className="main-menu">
                    <h1>Cyberdeck Database</h1>
                    <div className="menu-options">
                        <Link to="/" className="menu-item">Deck List</Link>
                        <Link to="/programs" className="menu-item">Programs</Link>
                        {/* Add more links here as features grow */}
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<DeckList />} />
                    <Route path="/deck/:deckName" element={<DeckDetail />} />
                    <Route path="/programs" element={<UtilityList />} />
                    <Route path="/program/:utilityName" element={<UtilityDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;