import { Link } from "react-router-dom";
import './Nav.css'

function Nav () {

  return (
    <nav>
      <Link to={'/'} className="navLink">Mais Recentes</Link>
      <Link to={'/noticia'} className="navLink">Noticia</Link>
      <Link to={'/favorita'} className="navLink">Favoritas</Link>
    </nav>
  )
}

export default Nav;