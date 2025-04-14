import './App.css'
import Home from './pages/Home'
import DetailPortfolio from './pages/DetailPortfolio'
import Experience from './pages/Experience' 
import PageNotFound from './pages/PageNotFound'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio/:id' element={<DetailPortfolio/>}/>
        <Route path='/experience' element={<Experience/>} />
        <Route path='/page-not-found' element={<PageNotFound/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App