import Section from '../Section';
import zelda from '../../assets/images/zelda.png';
import spiderman from '../../assets/images/banner-homem-aranha.png';
import hogwarts from '../../assets/images/fundo_hogwarts.png';
import { Action, Item, Items, Modal, ModalContent } from './styles';
import play from '../../assets/images/play.png';
import zoom from '../../assets/images/zoom.png';
import fechar from '../../assets/images/fechar.png';

type GalleryItem = {
  type: 'video' | 'image';
  url: string;
};

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=yf-3LsIsGbTcUF2k'
  }
];

type Props = {
  defaultCover: string;
  name: string;
};

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url;

    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom;

    return play;
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para ampliar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Icone de fechar" />
          </header>
          <img src={spiderman} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  );
};

export default Gallery;
