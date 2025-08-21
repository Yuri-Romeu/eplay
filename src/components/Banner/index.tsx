import { Imagem, Precos, Titulo } from './styles';
import bannerImg from '../../assets/images/banner-homem-aranha.png';

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> por R$ 99,90
        </Precos>
      </div>
    </Imagem>
  );
};

export default Banner;
