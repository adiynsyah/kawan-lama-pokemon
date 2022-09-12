import { Pokemon } from "../entity/pokemon.entity";
import { GetPokemonResp } from "../usecase/interface/get-pokemon.interface";

export function GetPokemonMapper(response: GetPokemonResp): Pokemon[] {
  const result: Pokemon[] = response.data.results.map(data => {
    const getUrlPokemon = data.url.split('/');

    const objPoke: Pokemon = {
      id: +getUrlPokemon[getUrlPokemon.length - 2],
      name: data.name,
      url: data.url
    };

    return objPoke;
  });

  return result;
} 