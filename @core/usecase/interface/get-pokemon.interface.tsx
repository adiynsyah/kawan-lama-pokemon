import { Pokemon } from "../../entity/pokemon.entity";


export interface GetPokemonDto {
  offset: number,
  limit: number
}

export interface GetPokemonResp {
  data: {
    results: Pokemon[]
  }
}