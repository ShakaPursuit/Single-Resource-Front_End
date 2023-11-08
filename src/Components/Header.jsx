import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{



    return(<>
    

    <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper"><Link to="/home">HOME</Link></div>
          <div className="div"><Link to="/menu">MENU</Link></div>
          <div className="text-wrapper-2">CONTACT</div>
          <div className="text-wrapper-3"><Link to="/about">ABOUT US</Link></div>
    
    
    </div>  </div>
    
    </>)
}


export default Header