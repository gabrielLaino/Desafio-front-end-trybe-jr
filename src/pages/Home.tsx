import { useEffect } from "react";
import Header from "../components/Header/Header";
import NoticiaPrincipal from "../components/NoticiaPrincipal/NoticiaPrincipal";
import NoticiaCard from "../components/NoticiaCard/NoticiaCard";

function Home () {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
      <Header />
      <NoticiaPrincipal />
      <NoticiaCard />
    </>
  )
}

export default Home;