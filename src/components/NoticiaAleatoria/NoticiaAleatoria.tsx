import { useEffect, useState } from "react";
import { IbgeComplete, IbgeType } from "../../types";

function NoticiaAleatoria() {
  const [noticias, setNoticias] = useState<IbgeType[]>([]);
  const [aleatorio, setAleatorio] = useState<number | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
        const data: IbgeComplete = await response.json();
        if (data.items.length > 0) {
          setNoticias(data.items);
          const numeroAleatorio = Math.floor(Math.random() * data.items.length);
          setAleatorio(numeroAleatorio);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };
    fetchNoticias();
  }, []);

  return (
    <div className="noticia-principal">
      <div className="escrita">
        <p className="recente">Noticia mais recente</p>
        <h1 className="title">
          {noticias.length > 0 && aleatorio !== null ? noticias[aleatorio]?.titulo : "Carregando..."}
        </h1>
        <article>
          {noticias.length > 0 && aleatorio !== null ? noticias[aleatorio]?.introducao : "Carregando..."}
        </article>
        <div className="baixo">
          <p>{noticias.length > 0 && aleatorio !== null ? noticias[aleatorio]?.data_publicacao : "Carregando..."}</p>
          <p>&hearts;</p>
          <button className="link">
            <a href={noticias.length > 0 && aleatorio !== null ? noticias[aleatorio]?.link : "Carregando..."}>Ler noticia aqui</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoticiaAleatoria;
