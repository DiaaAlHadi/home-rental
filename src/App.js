
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home'
import Property from './components/Property';
import { Routes, Route } from 'react-router-dom';
import Rent from './components/Rent';
import View from './components/View';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<h1>sign up page</h1>}/>
        <Route path='/properties' element={<h1>properties page</h1>}/>
        <Route path='/properties/:id' element={<View/>} />
        <Route path='/FAQ' element={<h1>frequently asked question</h1>}/>
        <Route path='/about' element={<h1>about page</h1>}/>
        <Route path='/contact' element={<h1>contact page</h1>}/>
        <Route path='/partner' element={<h1>partner page</h1>}/>
        <Route path='/terms' element={<h1>terms page</h1>}/>
        <Route path='/policy' element={<h1>policy page</h1>}/>
        <Route path='/privacy' element={<h1>privacy page</h1>}/>
        <Route path='/buy' element={<h1>buy page</h1>}/>
        <Route path='/rent' element={<Rent/>}/>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
