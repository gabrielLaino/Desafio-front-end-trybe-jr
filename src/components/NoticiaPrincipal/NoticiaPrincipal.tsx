import { useEffect, useState } from "react";
import { IbgeComplete, IbgeType } from '../../types';
import trybe from '../../img/image 68.png'

function NoticiaPrincipal() {
  const [noticias, setNoticias] = useState<IbgeType[]>([]);
  const [img, setImg] = useState('');

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
        const data: IbgeComplete = await response.json();
        data.items.forEach((d: IbgeType) => {
          setImg(d.imagens)
        })
        setNoticias(data.items);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNoticias();
  }, [noticias]);

  function handleClick () {
    console.log(img);
    
  }


  return (
    <div className="noticia-principal">
      <p>Noticia mais recente</p>
      <img src={trybe} alt="" />
      <h1>{noticias.length > 0 ? noticias[0]?.titulo : "Carregando..."}</h1>
      <article>{noticias.length > 0 ? noticias[0]?.introducao : "Carregando..."}</article>
      <p>{noticias.length > 0 ? noticias[0]?.data_publicacao : "Carregando..."}</p>
      <button><a href={noticias.length > 0 ? noticias[0]?.link : "Carregando..."}>Ler noticia aqui</a></button>
      <button onClick={handleClick}>aqui</button>
    </div>
  );
}

export default NoticiaPrincipal;