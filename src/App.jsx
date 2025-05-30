 
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route,Routes, Router, RouterProvider } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Sub from './components/Sub.jsx'
import SubCol from './pages/SubCol.jsx'
import InterQues from './pages/InterQues.jsx'
import DsaQues from './pages/DsaQues.jsx'


function App() {
  

  return (
    <>
     {/* <Header />
    
        <Outlet />
    
     <Footer /> */}
     <Header />
     <Routes>
        <Route path="home" element={<Home/>} >
        <Route path="SubCol" element={<SubCol />}/>
        <Route path="InterQues" element={<InterQues />}/>
        <Route path="DsaQues" element={<DsaQues />}/>
      </Route>
      <Route path="Contact" element={<Contact/>} />
      <Route path="Sub" element={<Sub />} >
        <Route path="SubCol" element={<SubCol />}/>
        <Route path="InterQues" element={<InterQues />}/>
        <Route path="DsaQues" element={<DsaQues />}/>
      </Route>
      <Route path="LoginSignup" element={<LoginSignup />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
