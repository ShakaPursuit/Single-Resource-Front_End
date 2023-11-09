import React, { useState, useEffect } from "react";
import "/Users/shakalivingstonepursuit/Desktop/SIngle-Resource-Project/Pizza-FrontEnd/src/index.css"
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const PizzaMenu = () => {
    const [pizza, setPizza] = useState([]);



// const{id}=useParams()

    const API= import.meta.env.VITE_REACT_API_URL






    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:9000/allpizzas`);
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                const data = await response.json();
                setPizza(data);





            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchData()
    }, [])
 

    return (<>

      <div className="overlap-group-wrapper" id="menu-stretch">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper"><Link to="/home">HOME</Link></div>
          <div className="div"><Link to="/menu">MENU</Link></div>
          <div className="text-wrapper-2">CONTACT</div>
          <div className="text-wrapper-3"><Link to="/about">ABOUT US</Link></div>
          <div className="rectangle-2" />
          {/* <img className="pizza" alt="Pizza" src="pizza-3000285-1920-1.png" /> */}
          <div className="rectangle-3" />
          
        
        </div>
      </div>
   
   


        <div id="pizza" >

            {pizza.map((item, index,id) => {
       
                


                return (<><div className="single-pizza" key={item.id} id={item.id}>
                    <div><img className="pi"src={`${item.name}.png`}/></div>

                    <div key={index + 1} id="name"><Link to={`/menu/${item.id}`}>{item.name}</Link></div>
                    <div key={index + 2} id="ingredient">Toppings{item.topping}</div>
                    <div>VeganFriendly{item.vegan ? " 🥗":"👎"}</div>
                    <div>Size:{item.size}</div>
                    <div>Price:{item.price}</div>




                </div></>)
            })}

        </div>
    </>)
}


export default PizzaMenu;