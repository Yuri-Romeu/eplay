import { Container, Link, FooterSection, SectionTitle, Links } from './styles';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de Ação"
                to="/categories#action"
              >
                Ação
              </Link>
            </li>

            <li>
              <Link
                title="Clique aqui para acessar jogos de esportes"
                to="/categories#sports"
              >
                Esportes
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de simulação"
                to="/categories#simulation"
              >
                Simulação
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de luta"
                to="/categories#fight"
              >
                Luta
              </Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link
                title="Clique aqui para acessar seção de promoções"
                to="/#on-sale"
              >
                Promoções
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar seção de em breve"
                to="/#coming-soon"
              >
                Em breve
              </Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  );
};

export default Footer;
