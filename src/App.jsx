import React from 'react'	
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
     
     <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
