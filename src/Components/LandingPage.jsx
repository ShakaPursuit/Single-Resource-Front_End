import React from "react";
import "/Users/jackiecheung/Module_4/SIngle-Resource-Project/Front_end/Single-Resource-Front_End/src/index.css"

import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper"><Link to="/home">HOME</Link></div>
          <div className="div"><Link to="/menu">MENU</Link></div>
          <div className="text-wrapper-2">CONTACT</div>
          <div className="text-wrapper-3"><Link to="/about">ABOUT US</Link></div>
          <img className="wood" alt="Wood" src="wood-2045380-1920-1.png" />
          <div className="rectangle-2" />
          <img className="pizza" alt="Pizza" src="pizza-3000285-1920-1.png" />
          <div className="rectangle-3" />
          <div className="text-wrapper-4">LA CARAVANA</div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et
            lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
          </p>
          <div className="text-wrapper-5">LA CARAVANA</div>
        </div>
      </div>
    </div>
  );
};

export default Landing
