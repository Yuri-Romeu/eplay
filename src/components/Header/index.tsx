import { HeaderBar, LinkCart, LinkItem, Links } from './styles';
import logo from '../../assets/images/logo.svg';
import carrinho from '../../assets/images/carrinho.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
      <LinkCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </LinkCart>
    </HeaderBar>
  );
};

export default Header;
