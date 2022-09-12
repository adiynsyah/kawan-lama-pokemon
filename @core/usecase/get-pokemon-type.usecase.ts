import { UseCase } from "../base/usecase";
import GetPokemonTypeInteractor from "../interactor/get-pokemon-type.interactor";
import { GetPokemonTypeMapper } from "../mapper/get-pokemon-type.mapper";
import { GetPokemonTypeDto } from "./interface/get-pokemon-type.interface";


export default class GetPokemonTypeUsecase implements UseCase<GetPokemonTypeDto> {

  execute(params: GetPokemonTypeDto) {
    return GetPokemonTypeInteractor(params).then((res) => 
      GetPokemonTypeMapper(res)
    );
  }

}