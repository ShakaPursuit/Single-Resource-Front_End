
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import './App.css'
import Landing from './Components/LandingPage'
import AboutUs from './Components/AboutPage'
import PizzaMenu from './Components/Menu'
import SinglePizza from './Components/SinglePizza'
import UpdatePizza from './Components/UpdatePizza'


function App() {


  return (
    <>
     <Router>
      <Routes>

      <Route path="/menu/:id" element={<SinglePizza/>}/>
      <Route path="/home" element={<Landing/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/menu" element={<PizzaMenu/>}/>
      <Route path="/menu/:id/edit" element={<UpdatePizza/>}/>
   

      </Routes>



     </Router>
    </>
  )
}

export default App
