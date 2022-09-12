import Image from 'next/image'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from '../../../styles/card.module.scss';
import PokeApiService from '../../../service/poke-api.service';
import DetailCard from '../detail-card/detail-card.component';
import { Pokemon } from '../../../@core/entity/pokemon.entity';
import { useState } from 'react';
import { PokemonDetailMapper } from '../../../@core/usecase/interface/get-pokemon-detail.interface';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { RemoveRedEye } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Paper)(() => ({}));

export default function Card(props: {data: Pokemon, showDetail?: boolean, doCatchPokemon?: any, doRemovePokemon?: any}) {
  const {data, showDetail, doCatchPokemon, doRemovePokemon} = props;
  const [openDetailDialog, setOpenDetailDialog] = useState<boolean>(false);
  const [pokemonDetailData, setPokemonDetailData] = useState<PokemonDetailMapper>(
    { name: '', types: [], stats: [], moves: [], abilities: [], sprites: {frontDefault: '', frontShiny: ''} }
  );

  const pokeApiService = new PokeApiService();
  const urlImage = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  const openDetail = () => {
    if (!showDetail) return;

    pokeApiService.getPokemonDetail({id: data.id}).then(resp => {
      setOpenDetailDialog(true);
      setPokemonDetailData(resp);
    });

    return true;
  };

  const closeDetail = (val: boolean) => {
    setOpenDetailDialog(!val);
  }

  const onCatchPokemon = (data: Pokemon) => {
    doCatchPokemon(data);
  }

  const onRemovePokemonCatch = (data: Pokemon) => {
    doRemovePokemon(data);
  }

  return (
    <Grid item xs={12} md={4}>
      <div className={styles.card}>
        <Item className={styles.cardOuter}>
          <Image loader={() => urlImage(data.id)} src={urlImage(data.id)} alt="test" width={100} height={100}/>
          <div className={styles.textCard}>{data.name}</div>
          { !showDetail && (<CatchingPokemonIcon onClick={() => onCatchPokemon(data)} />) }
          { showDetail && (<RemoveRedEye onClick={openDetail}/>) }
          { showDetail && (<DeleteIcon onClick={() => onRemovePokemonCatch(data)}/>) }
        </Item>
      </div>

      { showDetail && (<DetailCard isOpen={openDetailDialog} data={pokemonDetailData} setHandleClosed={closeDetail}/>) }
    </Grid>
  );
}
