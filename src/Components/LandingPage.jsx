import React from "react";
 import "/Users/shakalivingstonepursuit/Desktop/SIngle-Resource-Project/Pizza-FrontEnd/src/index.css"

import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div id="start">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper"><Link to="/home">HOME</Link></div>
          <div className="div"><Link to="/menu">MENU</Link></div>
          <div className="text-wrapper-2"><Link to="/contact">CONTACT</Link></div>
          <div className="text-wrapper-3"><Link to="/">ABOUT US</Link></div>
          <img className="wood" alt="Wood" src="wood-2045380-1920-1.png" />
          <div className="rectangle-2" />
          <img className="pizza" alt="Pizza" src="pizza-3000285-1920-1.png" />
          <div className="rectangle-3" />
          <div className="text-wrapper-4">LivingHeungs Pizzaria</div>
          <p className="p">
           
          </p>
          <div className="text-wrapper-5">Est. 1960</div>
        </div>
      </div>
    </div>
  );
};

export default Landing
