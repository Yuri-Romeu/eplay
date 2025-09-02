import { useState } from 'react';
import Section from '../Section';
import zelda from '../../assets/images/zelda.png';
import spiderman from '../../assets/images/banner-homem-aranha.png';
import hogwarts from '../../assets/images/fundo_hogwarts.png';
import { Action, Item, Items, Modal, ModalContent } from './styles';
import play from '../../assets/images/play.png';
import zoom from '../../assets/images/zoom.png';
import fechar from '../../assets/images/fechar.png';

import { GalleryItem } from '../../pages/Home';

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
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

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  });

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url;

    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom;

    return play;
  };

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    });
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                });
              }}
            >
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
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              className="fechar"
              alt="Icone de fechar"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  );
};

export default Gallery;
