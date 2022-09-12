import { GetPokemonTypeDto, GetPokemonTypeListResp } from '../usecase/interface/get-pokemon-type.interface';
import API from "../base/api";

export default function GetPokemonTypeListInteractor(params: GetPokemonTypeDto): Promise<GetPokemonTypeListResp> {
  const URL = `https://pokeapi.co/api/v2/type`;

  return API.get(URL, {params});
}


