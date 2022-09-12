import { GetPokemonDto, GetPokemonResp } from '../usecase/interface/get-pokemon.interface';
import API from "../base/api";

export default function GetPokemonInteractor(params: GetPokemonDto): Promise<GetPokemonResp> {
  const URL = `https://pokeapi.co/api/v2/pokemon`;

  return API.get(URL, {params});
}


