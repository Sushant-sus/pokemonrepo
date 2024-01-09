import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Pokemon from './components/pokemon';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Pokemon />} /> 
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
