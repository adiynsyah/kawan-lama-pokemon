
import API from "../base/api";
import { GetPokemonDetailDto, GetPokemonDetailResp } from '../usecase/interface/get-pokemon-detail.interface';

export default function GetPokemonDetailInteractor(params: GetPokemonDetailDto): Promise<GetPokemonDetailResp> {
  const URL = `https://pokeapi.co/api/v2/pokemon/${params.id}`;

  return API.get(URL);
}


