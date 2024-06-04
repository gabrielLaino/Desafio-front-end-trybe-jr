import { useEffect } from "react";
import NoticiaFavorita from "../components/NoticiaFavorita/NoticiaFavorita";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function Favoritas () {
  useEffect(() => {
    document.title = 'Favoritas'
  }, [])
  return (
    <>
      <Header />
      <Nav />
      <NoticiaFavorita />
      <Footer />
    </>
  )
}

export default Favoritas;