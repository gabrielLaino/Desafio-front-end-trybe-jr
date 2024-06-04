import { useContext, useEffect, useState } from "react";
import { IbgeComplete, IbgeImg, IbgeType } from '../../types';
import './NoticiaPrincipal.css'
import FavoritoContext from "../../context/FavortiosContext";

function NoticiaPrincipal() {
  const [noticias, setNoticias] = useState<IbgeType[]>([]);
  const [img, setImg] = useState<IbgeImg>();
  const {isFavorite, handleClick, novas} = useContext(FavoritoContext)

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
        const data: IbgeComplete = await response.json();
        const jsonString = data.items[0].imagens;
        const jsonObj = JSON.parse(jsonString);
        setImg(jsonObj);
        setNoticias(data.items);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNoticias();
  }, []);

  function changeFavorito () {
    handleClick();
    novas(noticias[0]);
  }


  return (
    <div className="noticia-principal">
      <div>
        {noticias.length > 0 ? <img 
        src={`https://agenciadenoticias.ibge.gov.br/${img?.image_intro}`} 
        alt="" className="ibgeimage"/> 
        : "Carregando..."
        }
      </div>
      <div className="escrita">
        <p className="recente">Noticia mais recente</p>
        <h1 className="title">{noticias.length > 0 ? noticias[0]?.titulo : "Carregando..."}</h1>
        <article>{noticias.length > 0 ? noticias[0]?.introducao : "Carregando..."}</article>
        <div className="baixo">
          <p>{noticias.length > 0 ? noticias[0]?.data_publicacao : "Carregando..."}</p>
          <p className={isFavorite ? 'favorito' : 'notfavorito'} onClick={changeFavorito}>&hearts;</p>
          <button className="link"><a href={noticias.length > 0 ? noticias[0]?.link : "Carregando..."}>Ler noticia aqui</a></button>
        </div>
      </div>
    </div>
  );
}

export default NoticiaPrincipal;