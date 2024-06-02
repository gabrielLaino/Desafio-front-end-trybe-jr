import trybeLogo from '../../img/image 68.png';
import './Header.css'

function Header () {
  return (
    <header>
      <img src={trybeLogo} alt="Logo da Trybe" />
      <h1 className='titulo-principal'>Trybe News</h1>
    </header>
  )
}

export default Header;