import { Pokemon, PokemonType } from "../entity/pokemon.entity";
import { GetPokemonTypeListResp, GetPokemonTypeResp } from "../usecase/interface/get-pokemon-type.interface";


export function GetPokemonTypeListMapper(response: GetPokemonTypeListResp): PokemonType[] {
  const result: PokemonType[] = response.data.results.map(data => {
    const objPoke: PokemonType = {
      name: data.name
    };

    return objPoke;
  });

  return result;
}

export function GetPokemonTypeMapper(response: GetPokemonTypeResp): Pokemon[] {
  const result: Pokemon[] = response.data.pokemon.map(data => {
    const getUrlPokemon = data.pokemon.url.split('/');

    const objPoke: Pokemon = {
      id: +getUrlPokemon[getUrlPokemon.length - 2],
      name: data.pokemon.name,
      url: data.pokemon.url
    };

    return objPoke;
  });

  return result;
} 