import { createContext } from "react";
import { IbgeType } from "../types";

type FavoritoContextType = {
  isFavorite: boolean,
  handleClick: () => void,
  news: IbgeType[];
  novas: (obj: IbgeType) => void
}

const FavoritoContext = createContext({} as FavoritoContextType)

export default FavoritoContext;