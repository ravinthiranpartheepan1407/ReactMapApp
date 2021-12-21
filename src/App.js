import logo from './logo.svg';
import './App.css';
import {useState, Component} from 'react';
import Maps from './map';
import MapContainer from './HorizonMap';
import Footer from './footer';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HorizonApp from './horizonmenuapp';
import Error from './error';
import ReactDOM from 'react-dom';
import HorizonTest from './apptest';
import MyGoogleMap from './googlemap';
function App() {

  return(

  <div className="bg-black App">
    <Router>

      <HorizonApp />
      <Maps />
      <Routes>
        <Route path="/horizonapptest" element={<MyGoogleMap />}/>
        <Route path="/" element={<MapContainer />}/>
      </Routes>
      </Router>



      <Footer />

    </div>





  );
}


export default App;
