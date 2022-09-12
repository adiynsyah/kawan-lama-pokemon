import { PokemonDetail } from "../../entity/pokemon.entity";

export interface GetPokemonDetailDto {
  id?: number
}

export interface GetPokemonDetailResp {
  data: PokemonDetail;
}

export interface PokemonDetailMapper {
  name: string;
  types: { name: string }[];
  stats: { name: string; baseStat: number }[];
  moves: { name: string }[];
  abilities: { name: string; }[];
  sprites: { frontDefault: string; frontShiny: string; };
}