import Product from '../Product';
import { Container, List } from './styles';

export type Props = {
  title: string;
  background: 'gray' | 'black';
};

const ProductsList = ({ title, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product
            category="Ação"
            description="Teste"
            image="https://placehold.co/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do Jogo"
          />
          <Product
            category="Ação"
            description="Teste"
            image="https://placehold.co/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do Jogo"
          />
          <Product
            category="Ação"
            description="Teste"
            image="https://placehold.co/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do Jogo"
          />
          <Product
            category="Ação"
            description="Teste"
            image="https://placehold.co/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do Jogo"
          />
        </List>
      </div>
    </Container>
  );
};

export default ProductsList;
