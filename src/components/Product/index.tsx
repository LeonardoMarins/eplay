import Tag from '../Tag'
import { Card, Descricao, Infos, TagProduct, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  description,
  image,
  infos,
  system,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    } else {
      return descricao
    }
  }
  return (
    <>
      <Card to={`/product/${id}`}>
        <img src={image} alt={title} />
        <Infos>
          {infos.map((info) => (
            <TagProduct key={info}>{info}</TagProduct>
          ))}
        </Infos>
        <Titulo>{title}</Titulo>
        <TagProduct>{category}</TagProduct>
        <TagProduct>{system}</TagProduct>
        <Descricao>{getDescricao(description)}</Descricao>
      </Card>
    </>
  )
}
export default Product