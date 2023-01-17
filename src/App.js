import './App.css';
import Home from './Pages/home/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import List from './Pages/list/List.js';
import Hotel from './Pages/hotel/Hotel.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
