import { useContext, useEffect, useState } from "react"
import { IbgeComplete, IbgeType } from "../../types";
import './NoticiaCard.css'
import FavoritoContext from "../../context/FavortiosContext";

function NoticiaCard () {

  const [noticias, setNoticias] = useState<IbgeType[]>([]);
  const [cont, setCont] = useState(19);
  const {novas} = useContext(FavoritoContext);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10');
        const data: IbgeComplete = await response.json();
        const filteredNoticias = data.items.slice(1);
        setNoticias(filteredNoticias);
      } catch {
        console.log('algo errado');
      }
    };
    fetchApi();
  }, [])

  async function handleClick () {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${cont}`);
    const data: IbgeComplete = await response.json();
    const filteredNoticias = data.items.slice(1);
    setNoticias(filteredNoticias);
    setCont(cont + 9);
  }

  function handleClickFavorite (index: number) {
    novas(noticias[index]);
    if(noticias[index].isFavorite) {
      noticias[index].isFavorite = false 
    } else {
      noticias[index].isFavorite = true;
      
    }
    
  }

  return (
    <div>
      {noticias?.length > 0 && 
      <div className="noticias">
        {noticias.map((noticia: IbgeType, index: number) => {
          return (
            <div key={index} className="noticia">
              <h3 className="tituloNoticia">{noticia.titulo}</h3>
              <article className="mono">{noticia.introducao}</article>
              <div className="baixo">
                <p>{noticia.data_publicacao}</p>
                <p onClick={() => handleClickFavorite(index)} className={noticias[index].isFavorite ? 'favorito' : 'notfavorito'}>&hearts;</p>
                <button className="link"><a href={noticia.link}>Ler noticia Aqui</a></button>

              </div>
            </div>
          )
        })}
      </div>
      }
      <button onClick={handleClick} className="mais">Mais Noticias</button>
    </div>
  )
}

export default NoticiaCard