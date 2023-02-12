import './App.css';
import Home from './Pages/home/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import List from './Pages/list/List.js';
import Hotel from './Pages/hotel/Hotel.js';
import Login from './Pages/login/login';
import Register from './Pages/register/Register';
import Reserve from './component/Reserve/Reserve';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reserve" element={<Reserve/>}/>

      </Routes>
    </Router>
  );
}

export default App;
