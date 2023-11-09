import React,{useState} from "react"

const CreatePizza=()=>{


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


    const handlePost=()=>{
       
        const fetchData = async () => {
            try {
              const response = await fetch(`${API}/allpizzas`, {
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
}



    return (<>
    
    <div>

        <form onSubmit={handelSubmit}>
            <label>Pizza Name
                <input type="text" name="text" value={newPizza.name} onChange={handleTextChange}></input>
            </label>
            <label>Ingredients
                <input type="text" name="ingredients" value={newPizza.ingredient} onChange={handleTextChange}></input>
            </label>
            
            <label>Price
                <input type="text" name="price"value={newPizza.price} onChange={handleTextChange}></input>
            </label>
            <label>Topping
                <input type="text" name="topping" value={newPizza.topping} onChange={handleTextChange}></input>
            </label>
            <label>Is Vegan Friendly
                <input type="text" name="is vegan friendly" value={newPizza.vegan} onChange={handleTextChange}></input>
            </label>
            <label>Size
                <input type="text" name="size" value={newPizza.size} onChange={handleTextChange}></input>
            </label>
            <button type="submit">Create Your Pizza</button>
            
            


        </form>
    </div>
    
    
    
    
    
    </>)
}

export default CreatePizza