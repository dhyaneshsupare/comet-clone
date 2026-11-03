import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Men from './pages/men/Men'
import Home from './pages/home/Home'
import Women from './pages/women/Women'
import Aboutus from './pages/aboutus/Aboutus'
import Vault from './pages/vault/Vault'
import ProductDetails from './pages/productdetails/ProductDetails'
import AllSneakers from './pages/allsneakers/AllSneakers'
import './App.css'
import Counter from './pages/Counter'
import MenProductDetails from './pages/productdetails/MenProductDetails'
import AllSneakersWomen from './pages/allsneakers/AllSneakersWomen'
import AllSneakersMen from './pages/allsneakers/AllSneakersMen'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/counter' element={<Counter/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/men' element={<Men/>} />
          <Route path='/women' element={<Women/>} />
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/vault' element={<Vault/>} />
          <Route path='/men/:id' element={<MenProductDetails/>} />
          <Route path='/productdetails/:id' element={<ProductDetails/>} />
          <Route path='/allsneakers' element={<AllSneakers/>} />
          <Route path='/allsneakers/men' element={<AllSneakersMen/>} />
          <Route path='/allsneakers/women' element={<AllSneakersWomen/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
