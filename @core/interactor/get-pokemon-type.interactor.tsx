import { GetPokemonTypeDto, GetPokemonTypeResp } from '../usecase/interface/get-pokemon-type.interface';
import API from "../base/api";

export default function GetPokemonTypeInteractor(params: GetPokemonTypeDto): Promise<GetPokemonTypeResp> {
  const URL = `https://pokeapi.co/api/v2/type/${params.type}`;

  return API.get(URL);
}


