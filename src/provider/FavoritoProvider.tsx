import { useState } from "react";
import FavoritoContext from "../context/FavortiosContext";
import { IbgeType } from "../types";

type FavoritoProviderType = {
  children: React.ReactNode;
}

function FavoritoProvider ({children}: FavoritoProviderType) {

 const [isFavorite, setIsFavorite] = useState(false);
 const [news, setNews] = useState<IbgeType[]>([])

 function handleClick () {
  setIsFavorite(!isFavorite);
 }

 function novas(obj: IbgeType) {
  setNews((prevNews) => {
    const index = prevNews.findIndex((item) => item.id === obj.id);
    if (index !== -1) {
      return prevNews.filter((item) => item.id !== obj.id);
    } else {
      return [...prevNews, obj];
    }
  });
}

  return (
    <FavoritoContext.Provider value={{
      isFavorite,
      handleClick,
      news,
      novas
    }}>
      {children}
    </FavoritoContext.Provider>
  )
}

export default FavoritoProvider;