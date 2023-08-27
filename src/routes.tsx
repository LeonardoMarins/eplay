import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Product from './components/Pages/Product'
import Categories from './components/Pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
