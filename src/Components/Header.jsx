import React from "react";
import "/Users/shakalivingstonepursuit/Desktop/SIngle-Resource-Project/Pizza-FrontEnd/src/index.css"
import { Link } from "react-router-dom";


const Header=()=>{



    return(<>
    

    <div className="overlap-group-wrapper" id="header">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper"><Link to="/home">HOME</Link></div>
          <div className="div"><Link to="/menu">MENU</Link></div>
          <div className="text-wrapper-2">CONTACT</div>
          <div className="text-wrapper-3"><Link to="/about">ABOUT US</Link></div>
    <Link to="/create"><button>Create A Pizza</button></Link>
    
    </div>  </div>
    
    </>)
}


export default Header