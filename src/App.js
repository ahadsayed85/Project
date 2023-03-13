import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
