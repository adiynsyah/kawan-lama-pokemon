import { UseCase } from "../base/usecase";
import GetPokemonTypeListInteractor from "../interactor/get-pokemon-type-list.interactor";
import { GetPokemonTypeListMapper } from "../mapper/get-pokemon-type.mapper";
import { GetPokemonTypeDto } from "./interface/get-pokemon-type.interface";


export default class GetPokemonTypeListUsecase implements UseCase<GetPokemonTypeDto> {

  execute(params: GetPokemonTypeDto) {
    return GetPokemonTypeListInteractor(params).then((res) => 
      GetPokemonTypeListMapper(res)
    );
  }

}