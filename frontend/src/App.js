import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ProductList from './pages/ProductList'
import ProductForm from './pages/ProductForm'
import Navbar from "./components/Navbar"
import {Toast} from "./components/Toast";

function App() {
  return (
      <Router>
          <Navbar />
          <Toast />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/edit/:id" element={<ProductForm />} />
        </Routes>
      </Router>
  )
}

export default App