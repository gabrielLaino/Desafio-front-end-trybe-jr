import { useEffect } from "react";
import Header from "../components/Header/Header";
import NoticiaPrincipal from "../components/NoticiaPrincipal/NoticiaPrincipal";
import NoticiaCard from "../components/NoticiaCard/NoticiaCard";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function Home () {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
      <Header />
      <NoticiaPrincipal />
      <Nav />
      <NoticiaCard />
      <Footer />
    </>
  )
}

export default Home;