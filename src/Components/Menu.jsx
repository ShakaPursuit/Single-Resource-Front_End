import React, { useState, useEffect } from "react";
import "/Users/shakalivingstonepursuit/Desktop/SIngle-Resource-Project/Pizza-FrontEnd/src/index.css"

const PizzaMenu = () => {
    const [pizza, setPizza] = useState([]);

    //   const API = import.meta.env.VITE_REACT_API_URL;



    // const API= import.meta.env.VITE_REACT_API_KEY






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


        <div id="pizza" >

            {pizza.map((item, index) => {




                return (<><div className="single-pizza" key={pizza.id} id={pizza.id}>

                    <div key={index + 1} id="name">{item.name}</div>
                    <div key={index + 2} id="ingredient">{item.topping}</div>
                    <div>{item.vegan ? " 🥗":"🐖"}</div>
                    <div>{item.size}</div>




                </div></>)
            })}

        </div>
    </>)
}


export default PizzaMenu;