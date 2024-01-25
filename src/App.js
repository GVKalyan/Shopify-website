import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import User from './Components/User';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<User/>} />
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Login' element={<Login/>}/>
        
      </Routes>
  );
}

export default App;
