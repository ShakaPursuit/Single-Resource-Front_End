// import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

// const SinglePizza = () => {
//     const API= import.meta.env.VITE_REACT_API_KEY

//     const navigate=useNavigate()
//     const [pizza, setPizza] = useState([])
//     const { id } = useParams()


//     useEffect(() => {

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`${API}/allpizzas`);
//                 if (!response.ok) {
//                     throw new Error(`Request failed with status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setPizza(data);
//             } catch (error) {
//                 console.error('Fetch error:', error)
//             }
//         }

//         fetchData()
//     }, [])
    

//     // const deleteIndex=(e)=>{
//     //     fetch(`${API}/${id}`,{method:'DELETE'})
//     //     .then((response)=>{

//     //         if(!response.ok){
//     //             throw new Error('Something Went Wrong')
//     //         }
//     //         navigate('/menu')

//     //     })
//     //     .catch((e)=>{console.log(e)})




//     // }


//     return (<>
//     <button id="backButton2">Return<Link to="/menu">🔙 All Pizzas</Link></button>
    
//         {pizza.map((item, specificIndex) => {
//             if (id == specificIndex) {
//                 return (<div className="single" key={index} id={index}>
//                         <div><img alt='pizza'src="Cheese.png"/></div>

// <div key={index + 1} id="name">{item.name}</div>
// <div key={index + 2} id="ingredient">{item.topping}</div>
// <div>{item.vegan ? " ":""}</div>
// <div>{item.size}</div>


                
                    
                    




//                 </div>
                
//                 )


//             }






//         })}

//         <div>

//         </div>
//             <div id="pizza-specific"><button >Delete Pizza</button></div>
//             <div><button><Link to={`/transactions/${id}/edit`}>Edit Transaction</Link></button></div>


//     </>)
// }

// export default SinglePizza