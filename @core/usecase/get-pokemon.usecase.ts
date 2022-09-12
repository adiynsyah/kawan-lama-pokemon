import { UseCase } from "../base/usecase";
import GetPokemonInteractor from "../interactor/get-pokemon.interactor";
import { GetPokemonMapper } from "../mapper/get-pokemon.mapper";
import { GetPokemonDto } from "./interface/get-pokemon.interface";


export default class GetPokemonUsecase implements UseCase<GetPokemonDto> {

  execute(params: GetPokemonDto) {
    return GetPokemonInteractor(params).then((res) => 
      GetPokemonMapper(res)
    );
  }

}