import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function UpdatePizza({ pizzaID }) {
  const [pizzaData, setPizzaData] = useState({name:"",price:"",topping: "",ingredient:"",vegan: "",size: ""});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const allPizzaData = {name:pizzaData.name,price:pizzaData.price,topping:pizzaData.topping,ingredient:pizzaData.ingredient,vegan:pizzaData.vegan,size:pizzaData.size}
  const API = import.meta.env.vite_REACT_API_URL

  useEffect(() => {
    fetch(`${API}/allpizzas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPizzaData(data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching pizza data:", error);
        setLoading(false);
      });
  }, [pizzaID]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPizzaData({
      ...pizzaData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`${API}/allpizzas/${pizzaID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allPizzaData),
    })
      .then((response) => {
        if (response.status === 200) {
          console.error("Pizza updated successfully.");
        } else {
          console.error("Failed to update pizza.");
        }
      })
      .catch((error) => {
        console.error("Error updating pizza:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={pizzaData.name}
        onChange={handleInputChange}
        placeholder="Pizza Name"
      />
      <input
        type="text"
        name="price"
        value={pizzaData.price}
        onChange={handleInputChange}
        placeholder="Price"
      />
      <input
        type="text"
        name="ingredient"
        value={pizzaData.ingredient}
        onChange={handleInputChange}
        placeholder="Ingredients"
      />
      <input
        type="text"
        name="topping"
        value={pizzaData.topping}
        onChange={handleInputChange}
        placeholder="Toppings"
      />
      <select name="size" value={pizzaData.size} onChange={handleInputChange}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <label>
        Vegan:
        <input
          type="checkbox"
          name="vegan"
          checked={pizzaData.vegan}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Update Pizza</button>
    </form>
  );
}

export default UpdatePizza;
