import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favoritas from './pages/Favoritas'
import Noticia from './pages/Noticia'
import NotFound from './pages/NotFound'

function App() {

  return (
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorita' element={<Favoritas />} />
      <Route path='Noticia' element={<Noticia />} />
      <Route path='*' element={<NotFound />} />
   </Routes>
  )
}

export default App
