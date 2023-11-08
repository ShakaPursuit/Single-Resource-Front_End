import React, { useState, useEffect } from "react";
import "/Users/shakalivingstonepursuit/Desktop/SIngle-Resource-Project/Pizza-FrontEnd/src/index.css"
import Header from "./Header";
const PizzaMenu = () => {
    const [pizza, setPizza] = useState([]);





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
    <Header/>


        <div id="pizza" >

            {pizza.map((item, index) => {
       
                


                return (<><div className="single-pizza" key={item.id} id={item.id}>
                    <div><img className="pi"src={`${item.name}.png`}/></div>

                    <div key={index + 1} id="name">{item.name}</div>
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