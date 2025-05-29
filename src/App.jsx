 
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  

  return (
    <>
     <Header />
     { <Home /> && <Outlet />}
     <Footer />
    </>
  )
}

export default App
