import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FavoritoProvider from './provider/FavoritoProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FavoritoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritoProvider>
)
