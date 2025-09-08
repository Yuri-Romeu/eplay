import Button from '../Button';
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles';
import starWars from '../../assets/images/star_wars.png';
import Tag from '../Tag';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import { close, remove } from '../../store/reducers/cart';
import { formataPreco } from '../ProductsList';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const CloseCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.prices.current!);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button type="button" title="Clique aqui para continuar com a compra">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
