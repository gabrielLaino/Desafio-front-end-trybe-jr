import { useEffect } from "react";
import Header from "../components/Header/Header";

function Home () {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
      <Header />
    </>
  )
}

export default Home;