
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Blog from './components/Blog';
import Adventure from './components/Adventure';

function App() {
  return (
    <div>
  
      <Navbar />
      <Routes>
        <Route exact  path="/" element={ <Home/> } />
        <Route  exact path="/blog" element={ <Blog/> } />
        <Route exact  path="/adventure" element={ <Adventure /> } />
      </Routes>

     
    </div>
  );
}

export default App;
