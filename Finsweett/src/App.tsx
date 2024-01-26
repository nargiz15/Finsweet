
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './assets/Components/NavBar/NavBar'
import Product from './assets/Components/Product.page/Product'
import Home from './assets/Components/Home.page/Home'
import Pricing from './assets/Components/Pricing'
import AboutUs from './assets/Components/AboutUs'
import Blog from './assets/Components/Blog'
import Contact from './assets/Components/Contact'
import FreeTrial from './assets/Components/FreeTrial'
import Footer from './assets/Components/Footer/Footer'


<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat&family=Roboto:wght@300&display=swap');
</style>


function App() {
  

  return (
    <>
     <NavBar></NavBar>
     
    
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/freetrial' element={<FreeTrial/>}></Route>
     </Routes>

     <Footer/>
    </>
  )
}

export default App
