import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
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
        </Routes>
      </Router>
  )
}

export default App