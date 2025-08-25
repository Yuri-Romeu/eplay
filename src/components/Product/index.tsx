import Tag from '../Tag';
import { Card, Descricao, Titulo } from './styles';

const Product = () => {
  return (
    <Card>
      <img src="https://placehold.co/222x250" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt
        sint aliquam nobis et similique magnam accusamus adipisci reiciendis
        culpa distinctio quisquam temporibus repellendus quia rem quod excepturi
        repudiandae id.
      </Descricao>
    </Card>
  );
};

export default Product;
