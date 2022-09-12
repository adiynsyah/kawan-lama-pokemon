import { Pokemon, PokemonType } from "../../entity/pokemon.entity";


export interface GetPokemonTypeDto {
  type: string
}

export interface GetPokemonTypeResp {
  data: {
    pokemon: {pokemon: Pokemon}[]
  }
}

export interface GetPokemonTypeListResp {
  data: {
    results: PokemonType[]
  }
}