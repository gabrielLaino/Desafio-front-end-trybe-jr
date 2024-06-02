export type IbgeType = {
  id: number,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  protudo_id: number,
  produtos: string,
  editorias: string,
  imagens: string,
  destaque: boolean,
  link: string,
}

export type IbgeComplete = {
  count: number,
  page: number,
  totalPages: number,
  nextPage: number,
  previousPage: number,
  showingFrom: number,
  showingTo: number,
  items: IbgeType[]
}

export type IbgeImg = {
  image_intro: string,
  float_intro: string,
  image_intro_alt: string,
  image_intro_caption: string,
  image_fulltext: string,
  float_fulltext: string,
  image_fulltext_alt: string,
  image_fulltext_caption: string
}