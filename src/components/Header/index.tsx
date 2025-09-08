import { HeaderBar, CartButton, LinkItem, Links } from './styles';
import logo from '../../assets/images/logo.svg';
import carrinho from '../../assets/images/carrinho.svg';
import { Link } from 'react-router-dom';

import { open } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          {' '}
          <img src={logo} alt="EPLAY " />
        </Link>

        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a>Novidades</a>
            </LinkItem>
            <LinkItem>
              <a>Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  );
};

export default Header;
