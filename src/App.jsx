
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import './App.css'
import Landing from './Components/LandingPage'
import AboutUs from './Components/AboutPage'
import PizzaMenu from './Components/Menu'
import SinglePizza from './Components/SinglePizza'
import UpdatePizza from './Components/UpdatePizza'
import Contact from './Components/ContactCard'
import CreatePizza from './Components/CreatePizza'
import EditPizza from './Components/UpdatePizza'


function App() {


  return (
    <>
     <Router>
      {/* <Header/> */}
      <Routes>

      <Route path="/menu/:id" element={<SinglePizza/>}/>
      <Route path="/home" element={<Landing/>}/>
      <Route path="/" element={<AboutUs/>}/>
      <Route path="/menu" element={<PizzaMenu/>}/>
      <Route path="/create" element={<CreatePizza/>}/>
      <Route path="/menu/:id/edit" element={<EditPizza/>}/>
      <Route path="/menu/:id/edit" element={<UpdatePizza/>}/>
      <Route path="/contact" element={<Contact/>}/>
   

      </Routes>



     </Router>
    </>
  )
}

export default App
