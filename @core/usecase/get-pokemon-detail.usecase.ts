import { UseCase } from "../base/usecase";
import GetPokemonDetailInteractor from "../interactor/get-pokemon-detail.interactor";
import { GetPokemonDetailMapper } from "../mapper/get-pokemon-detail.mapper";
import { GetPokemonDetailDto } from "./interface/get-pokemon-detail.interface";

export default class GetPokemonDetailUsecase implements UseCase<GetPokemonDetailDto> {

  execute(params: GetPokemonDetailDto) {
    return GetPokemonDetailInteractor(params).then((res) => 
      GetPokemonDetailMapper(res)
    );
  }

}