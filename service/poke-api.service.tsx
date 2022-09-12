import { GetPokemonDto } from "../@core/usecase/interface/get-pokemon.interface";
import { GetPokemonDetailDto } from "../@core/usecase/interface/get-pokemon-detail.interface";

import GetPokemonDetailUsecase from "../@core/usecase/get-pokemon-detail.usecase";
import GetPokemonUsecase from "../@core/usecase/get-pokemon.usecase";
import { GetPokemonTypeDto } from "../@core/usecase/interface/get-pokemon-type.interface";
import GetPokemonTypeListUsecase from "../@core/usecase/get-pokemon-type-list.usecase";
import GetPokemonTypeUsecase from "../@core/usecase/get-pokemon-type.usecase";


export default class PokeApiService {
  private getPokemonUsecase = new GetPokemonUsecase();
  private getPokemonDetailUsecase = new GetPokemonDetailUsecase();
  private getPokemonTypeListUsecase = new GetPokemonTypeListUsecase();
  private getPokemonTypeUsecase = new GetPokemonTypeUsecase();

  getPokemon(param: GetPokemonDto) {
    return this.getPokemonUsecase.execute(param);
  }

  getPokemonDetail(param: GetPokemonDetailDto) {
    return this.getPokemonDetailUsecase.execute(param); 
  }

  getPokemonTypeList(param: GetPokemonTypeDto) {
    return this.getPokemonTypeListUsecase.execute(param); 
  }

  getPokemonType(param: GetPokemonTypeDto) {
    return this.getPokemonTypeUsecase.execute(param); 
  }

}