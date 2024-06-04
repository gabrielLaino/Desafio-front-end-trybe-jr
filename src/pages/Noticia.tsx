import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import NoticiaAleatoria from "../components/NoticiaAleatoria/NoticiaAleatoria";

function Noticia () {
  useEffect(() => {
    document.title = 'Noticia Aleatoria'
  }, [])
  return (
    <div>
      <Header />
      <Nav />
      <NoticiaAleatoria />
      <Footer />
    </div>
  )
}

export default Noticia;