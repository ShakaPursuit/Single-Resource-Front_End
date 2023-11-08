import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const SinglePizza = () => {
    const API= import.meta.env.VITE_REACT_API_KEY

    const navigate=useNavigate()
    const [pizza, setPizza] = useState(

        {
        
            name: "",
            price: "",
            ingredient: "",
            topping: "",
            vegan: false,
            size: ""
        }




    )
    const { id } = useParams()


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:9000/allpizzas/${id}`);
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error('Fetch error:', error)
            }
        }

        fetchData()
    }, [])
    

    // const deleteIndex=(e)=>{
    //     fetch(`${API}/${id}`,{method:'DELETE'})
    //     .then((response)=>{

    //         if(!response.ok){
    //             throw new Error('Something Went Wrong')
    //         }
    //         navigate('/menu')

    //     })
    //     .catch((e)=>{console.log(e)})




    // }


    return (<>
    <div key={pizza.id}>
        <h1>{pizza.name}</h1>
        <h1>{pizza.topping}</h1>
        <h1>{pizza.vegan?"🥗":"👎"}</h1>
        <h1>{pizza.size}</h1>
        <h1>{pizza.price}</h1>
    </div>

    






       
    </>)
}

export default SinglePizza