import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Pokemon from './components/pokemon';
import { Helmet } from 'react-helmet';
function App() {
  return (
    
    <div className="App">
        <BrowserRouter>
        <Helmet>
          <title>Pokemon Gallery</title>
            <meta
              name="Description"
              content='Get information of all your favourite Pokemon'
            />
            <meta name='keywords' content='Pokemon, Pikachu, Superpower, Action, Super Hero, Cartoon, TV Series, Top Best Anime, Adventure, Pet, Animal, Award Winning'/>
        </Helmet>
              <Routes>
                <Route path="/" element={<Pokemon />} /> 
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
