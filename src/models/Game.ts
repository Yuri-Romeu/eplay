class Game {
  category: string;
  description: string;
  image: string;
  infos: string[];
  system: string;
  title: string;
  id: number;

  constructor(
    id: number,
    category: string,
    title: string,
    system: string,
    image: string,
    description: string,
    infos: string[]
  ) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.system = system;
    this.image = image;
    this.description = description;
    this.infos = infos;
  }
}

export default Game;
