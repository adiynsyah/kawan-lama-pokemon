import { GetPokemonDetailResp, PokemonDetailMapper } from "../usecase/interface/get-pokemon-detail.interface";

export function GetPokemonDetailMapper(response: GetPokemonDetailResp): PokemonDetailMapper {
  const getData = response.data;

  const result = {
    name: getData.name,
    sprites: { 
      frontDefault: getData.sprites?.front_default,
      frontShiny: getData.sprites?.front_shiny
    },
    types: getData.types.map(dt => { return { name: dt.type.name }; }),
    moves: getData.moves.map(dt => { return { name: dt.move.name }; }),
    stats: getData.stats.map(dt => { return { name: dt.stat.name, baseStat: dt.base_stat }; }),
    abilities: getData.abilities.map(dt => { return { name: dt.ability.name }; })
  };

  return result;
} 