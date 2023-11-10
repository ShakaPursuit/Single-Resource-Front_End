import React,{useState} from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const CreatePizza=()=>{
    const API= import.meta.env.VITE_REACT_API_URL


    const[newPizza,setNewPizza]=useState({
        name:"",
        price:"",
        ingredient:"",
        topping:"",
        vegan:false,
        size:""



    })
const formData={name:newPizza.name,
    price:newPizza.price,
    ingredient:newPizza.ingredient,
    topping:newPizza.topping,
    vegan:newPizza.vegan,
    size:newPizza.size
}


const navigate=useNavigate()
    const handlePost=()=>{
       
        const fetchData = async () => {
            try {
              const response = await fetch(`${API}`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
              });
      
              if (!response.ok) {
                throw new Error(`Request failed with the status: ${response.status}`);
              }
      
              const data = await response.json();
              console.log(data);
              
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchData();
    }


    const handleTextChange=(event)=>{
        setNewPizza({...newPizza,[event.target.name]:event.target.value})

}

const handelSubmit=(e)=>{
    e.preventDefault()
    handlePost()
    navigate('/menu')
}



    return (<>
    
    <div className="">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper"><Link to="/home">HOME</Link></div>
          <div className="div"><Link to="/menu">MENU</Link></div>
          
          <div className="rectangle-2" />
          <img className="pizza" alt="Pizza" src="pizza-3000285-1920-1.png" />
          <div className="rectangle-3" />
          
        
        </div>
      </div>
    </div>
   
    
    <div>

        <form onSubmit={handelSubmit} id="create-pizza">
            <label>Pizza Name
                <input type="text" name="name" value={newPizza.name} onChange={handleTextChange}></input>
            </label>
            <label>Ingredients
                <input type="text" name="ingredient" value={newPizza.ingredient} onChange={handleTextChange}></input>
            </label>
            
            <label>Price
                <input type="text" name="price"value={newPizza.price} onChange={handleTextChange}></input>
            </label>
            <label>Topping
                <input type="text" name="topping" value={newPizza.topping} onChange={handleTextChange}></input>
            </label>
            <label> Vegan Friendly
                <input type="text" name="vegan" value={newPizza.vegan} onChange={handleTextChange}></input>
            </label>
            <label>Size
                <input type="text" name="size" value={newPizza.size} onChange={handleTextChange}></input>
            </label>
            <button type="submit">Create Your Pizza</button>
            
            


        </form>
    </div>
          <img className="wood" alt="Wood" src="wood-2045380-1920-1.png" />
    
    
    
    
    
    </>)
}

export default CreatePizza