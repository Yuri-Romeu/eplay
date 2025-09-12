import { useParams } from 'react-router-dom';

import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';

import { useGetGameQuery } from '../../services/api';

type GameParams = {
  id: string;
};

const Product = () => {
  const { id } = useParams() as GameParams;
  const { data: game } = useGetGameQuery(id);

  if (!game) {
    return <Loader />;
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <strong>Plataforma:</strong> {game.details.system} <br />
          <strong>Desenvolvedor:</strong> {game.details.developer} <br />
          <strong>Editora:</strong> {game.details.publisher} <br />
          <strong>Idiomas:</strong> O jogo oferece suporte a diversos idiomas,
          incluindo {game.details.languages.join(', ')}, entre outros. As opções
          de áudio e legendas podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery
        itens={game.media.gallery}
        defaultCover={game.media.cover}
        name={game.name}
      />
    </>
  );
};

export default Product;
