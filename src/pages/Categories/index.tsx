import ProductsList from '../../components/ProductsList';
import residente from '../../assets/images/resident.png';
import diablo from '../../assets/images/diablo.png';
import zelda from '../../assets/images/zelda.png';
import starWars from '../../assets/images/star_wars.png';
import Game from '../../models/Game';

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residente,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 2,
    category: 'Ação',
    title: '',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: residente,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 3,
    category: 'Ação',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residente,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 4,
    category: 'Ação',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residente,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  }
];

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    title: 'Diablo IV',
    infos: ['17/05'],
    system: 'Windows'
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor  é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['05/04'],
    image: starWars,
    title: 'Star Wars',
    system: 'Windows'
  },
  {
    id: 7,
    category: 'Ação',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residente,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['05/04'],
    image: zelda,
    title: 'The Legend of Zelda - TOK',
    system: 'Switch'
  }
];

const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="gray" />
      <ProductsList games={emBreve} title="Ação" background="black" />
      <ProductsList games={promocoes} title="Aventura" background="gray" />
      <ProductsList games={emBreve} title="FPS" background="black" />
    </>
  );
};

export default Categories;
