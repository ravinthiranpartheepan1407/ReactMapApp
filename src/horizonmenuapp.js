import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
function HorizonApp(){
  return(
    <div id="txt-down" className="text-right pb-2.5">
    <NavLink id="txt-down" className="text-white text-right" to="/">Home</NavLink>
    &nbsp;
    &nbsp;
          <NavLink id="txt-down" className="text-white text-right" to="/horizonapptest">App Test</NavLink>
          &nbsp;
          &nbsp;

    </div>
  );
}

export default HorizonApp;
