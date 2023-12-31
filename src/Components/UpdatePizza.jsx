import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



import { Link } from "react-router-dom";

const EditPizza = () => {
    const API= import.meta.env.VITE_REACT_API_URL

    const navigate=useNavigate()
    const [pizza, setPizza] = useState([])
    const { id } = useParams()
    const [formData,setFormData]=useState(
        
        {
            name: "",
            topping: "",
            ingredient: "",
            size: "",
            vegan:"",
            price:""

        }

    )
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`${API}`);
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                const data = await response.json();
                setPizza(data);
                const specificTransaction = data[id];
        setFormData(specificTransaction);
            } catch (error) {
                console.error('Fetch error:', error)
            }
        }

        fetchData()
    }, [id])
  
    const handleChange=(event)=>{
        const value=event.target.value
        const name=event.target.name
     
        
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
        
    }


   
    const handlePost=()=>{
       
        const fetchData = async () => {
            try {
                
                const updatedIndex= (data.length)-1;
              const response = await fetch(`${API}/${id}`, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
              });
      console.log(formData)
              if (!response.ok) {
                throw new Error(`Request failed with the status: ${response.status}`);
              }
      
              const data = await response.json();
         console.log(data);
              
             

            
        
              navigate(`/menu`)
              
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchData();
        
        
        
        
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        handlePost()
       
        
       
      


            }
            
    

    

    return (<>
    <button id="backButton2"><Link to="/menu">🔙 All Pizzas</Link></button>
    
        

        <div>
       
        {pizza.map((item, index) => {
            if (id == item.id) {
                return (<div className="single" key={index} id={index}>



                    <form id="edit-form" onSubmit={handleSubmit}>

                        <div id="name"><strong>
                            <label id="pizza name">Pizza Name&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input1" type="text" placeholder={formData.name}onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalName-{`${item.name}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="topping"><strong>
                            <label id="pizza-topping">Pizza Topping&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input2" type="text" placeholder={formData.topping} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalToppings-{`${item.topping}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="ingredient"><strong>
                            <label id="pizza-ingredient">Pizza Ingredient&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input3" type="text" placeholder={formData.ingredient} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalIngredients-{`${item.ingredient}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="size"><strong>
                            <label id="pizza-size">Pizza Size&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input4" type="text" placeholder={formData.size} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalSize-{`${item.size}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="vegan"><strong>
                            <label id="pizza-ingredient">Vegan(T/F) &nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input5" type="text" placeholder={formData.vegan} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>Vegan-{`${item.vegan?"🥗":"👎"}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="price"><strong>
                            <label id="pizza-price">Pizza Price&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input6" type="text" placeholder={formData.price} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalPrice-{`${item.price}`}</label>&nbsp;&nbsp;</strong></div>
                        
                        
                        <div><button type ="submit"> Click to update Changes</button></div>
                        
                        

                    </form>


                </div>)


            }






        })}

        </div>
            


    </>)
}

export default EditPizza
