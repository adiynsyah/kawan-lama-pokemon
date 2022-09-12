
export interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export interface PokemonDetail {
  name: string;
  types: Type[];
  stats: Stat[];
  moves: Move[];
  abilities: Abilitie[];
  sprites: Sprite;
}

export interface PokemonType {
  name: string;
}

interface Type {
  slot: number;
  type: { name: string; }
}

interface Stat {
  base_stat: number;
  stat: { name: string }
}

interface Move {
  move: { name: string; }
}

interface Abilitie {
  ability: { name: string; }
}

interface Sprite {
  front_default: string;
  front_shiny: string;
}