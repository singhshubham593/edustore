import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route,Routes, Router, RouterProvider } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Sub from './components/Sub.jsx'
import SubCol from './pages/SubCol.jsx'
import InterQues from './pages/InterQues.jsx'
import DsaQues from './pages/DsaQues.jsx'

//router creation 
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="home" element={<Home/>} >
//         <Route path="SubCol" element={<SubCol />}/>
//         <Route path="InterQues" element={<InterQues />}/>
//         <Route path="DsaQues" element={<DsaQues />}/>
//       </Route>
//       <Route path="Contact" element={<Contact/>} />
//       <Route path="Sub" element={<Sub />} >
//         <Route path="SubCol" element={<SubCol />}/>
//         <Route path="InterQues" element={<InterQues />}/>
//         <Route path="DsaQues" element={<DsaQues />}/>
//       </Route>
//       <Route path="LoginSignup" element={<LoginSignup />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <RouterProvider router={router}/>
  // </StrictMode>,
  <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<App />}>
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
    </Route>
      </Routes> */}
      <App />

  </BrowserRouter>
)
