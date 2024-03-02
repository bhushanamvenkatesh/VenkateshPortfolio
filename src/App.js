
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home'
// import About from './components/About';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet></Outlet>
      
    </div>
  );
}

export default App;
