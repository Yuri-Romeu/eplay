import {
  HeaderBar,
  CartButton,
  LinkItem,
  Links,
  Hamburger,
  HeaderRow,
  NavMobile
} from './styles';
import logo from '../../assets/images/logo.svg';
import carrinho from '../../assets/images/carrinho.svg';
import { Link } from 'react-router-dom';

import { open } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Link to="/">
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
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isOpen ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  );
};

export default Header;
