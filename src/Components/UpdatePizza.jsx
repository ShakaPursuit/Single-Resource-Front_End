import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



import { Link } from "react-router-dom";

const EditPizza = () => {
    const API= import.meta.env.VITE_REACT_API_KEY

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
                const response = await fetch(`http://localhost:9000/allpizzas`);
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
                
              const response = await fetch(`${API}/${index}`, {
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
              
             

              const updatedIndex= (data.length)-1;
            
        
              navigate(`/menu/${updatedIndex}`)
              
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
                                <input name="date" id="input1" type="text" value={formData.name} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalName-{`${item.name}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="topping"><strong>
                            <label id="pizza-topping">Pizza Topping&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input2" type="text" value={formData.topping} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalToppings-{`${item.topping}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="ingredient"><strong>
                            <label id="pizza-ingredient">Pizza Topping&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input3" type="text" value={formData.ingredient} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalIngredients-{`${item.ingredient}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="size"><strong>
                            <label id="pizza-size">Pizza Topping&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input4" type="text" value={formData.size} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalSize-{`${item.size}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="vegan"><strong>
                            <label id="pizza-ingredient">Vegan &nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input5" type="text" value={formData.vegan} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalIngredients-{`${item.vegan}`}</label>&nbsp;&nbsp;</strong></div>

                                <div id="price"><strong>
                            <label id="pizza-price">Pizza Topping&nbsp;&nbsp;:&nbsp;&nbsp;
                                <input name="date" id="input6" type="text" value={formData.price} onChange={handleChange}>
                                </input></label>&nbsp;&nbsp;&nbsp;&nbsp;<label>OriginalIngredients-{`${item.price}`}</label>&nbsp;&nbsp;</strong></div>
                        
                        
                        <div><button type ="submit"> Click to update Changes</button></div>
                        
                        

                    </form>


                </div>)


            }






        })}

        </div>
            


    </>)
}

export default EditPizza
