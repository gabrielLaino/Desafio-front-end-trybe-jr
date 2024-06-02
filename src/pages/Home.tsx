import { useEffect } from "react";
import Header from "../components/Header/Header";
import NoticiaPrincipal from "../components/NoticiaPrincipal/NoticiaPrincipal";

function Home () {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
      <Header />
      <NoticiaPrincipal />
    </>
  )
}

export default Home;