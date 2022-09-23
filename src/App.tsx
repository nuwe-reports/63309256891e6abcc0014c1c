import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import CharactersPage from './pages/CharactersPage';

function App() {

  return (
    <div className="App">
    <Routes>
      <Route  path="/" element={<LoginPage/>} />
      <Route  path="/characters/:page" element={<CharactersPage/>}/>
    </Routes>
    </div>
  )
}

export default App
