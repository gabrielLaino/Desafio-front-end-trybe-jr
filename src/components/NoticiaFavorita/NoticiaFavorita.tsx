import { useContext } from "react";
import FavoritoContext from "../../context/FavortiosContext";
import { IbgeType } from "../../types";

function NoticiaFavorita() {
  const { news } = useContext(FavoritoContext);

  return (
    <div>
      {news.length > 0 ? (
        <div className="noticias">
          {news.map((noticia: IbgeType, index: number) => (
            <div key={index} className="noticia">
              <h3 className="tituloNoticia">{noticia.titulo}</h3>
              <article className="mono">{noticia.introducao}</article>
              <div className="baixo">
                <p>{noticia.data_publicacao}</p>
                <button className="link"><a href={noticia.link}>Ler noticia Aqui</a></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Não há notícias favoritas.</p>
      )}
    </div>
  );
}

export default NoticiaFavorita;
