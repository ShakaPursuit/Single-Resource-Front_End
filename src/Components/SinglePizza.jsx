import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import "/Users/jackiecheung/Module_4/SIngle-Resource-Project/Front_end/Single-Resource-Front_End/src/index.css"

const SinglePizza = () => {

    
    const API = import.meta.env.VITE_REACT_API_URL;
    const navigate = useNavigate();
    const [pizza, setPizza] = useState([
        // {name:"",ingredient:"",topping:"",size:"",vegan:false,price:""}
    ]);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/allpizzas`);
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
        <Header/>
        <div>
             {pizza.map((item, index) => {
                if(parseInt(id)==item.id){
       
                


       return (<><div className="single-pizza" key={item.id} id={item.id}>
           <div><img className="pi"src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLabmjYd-ruk0XIV-HcYYH2AJac6fueUbDjg&usqp=CAU`}/></div>
           <div key={index + 1} id="name">{item.name}</div>
           <div key={index + 2} id="ingredient">Toppings{item.topping}</div>
           <div>VeganFriendly{item.vegan ? " 🥗":"👎"}</div>
           <div>Size:{item.size}</div>
           <div>Price:{item.price}</div>


             

       </div></>)
}
   })}

           
            </div>
        </>
    );
};
export default SinglePizza;