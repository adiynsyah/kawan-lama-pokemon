import { Container, Grid } from '@mui/material';
import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Pokemon } from '../@core/entity/pokemon.entity';
import { GetPokemonDto } from '../@core/usecase/interface/get-pokemon.interface';
import { messageBoxOpen } from '../components/common/message';

import Card from '../components/common/card/card.component';
import Filter from '../components/common/filter/filter.component';
import PokeApiService from '../service/poke-api.service';
import PokeContext from '../context/PokeContext';
import ReactHowler from 'react-howler';

let getPokemonParams: GetPokemonDto = {
  offset: Math.floor(Math.random() * 20),
  limit: 20
};
let isSelectedFilter = false;

const Home: NextPage = () => {

  const pokeApiService = new PokeApiService();
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [isPlaySound, setPlaySound] = useState({status: false, song: 'jump.mp3'});
  const { catchPokemon, setCatchPokemon } = useContext(PokeContext);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = (isInfinitScroll = false, isRandom = false) => {

    if (isSelectedFilter) { return; }

    if (isRandom) getPokemonParams.offset = Math.floor(Math.random() * 20);

    if (isInfinitScroll) getPokemonParams.offset += 20;

    pokeApiService.getPokemon(getPokemonParams).then(resp => {
      if (isInfinitScroll) {
        let newPokemon = pokemons.concat(resp);
        setPokemon(newPokemon);
      } else {
        setPokemon(resp);
      }
    })
  }

  const handleInfiniteScroll = () => {
    getPokemon(true);
  }

  const onChangeFilter = (value: any) => {

    isSelectedFilter = Boolean(value);

    if (isSelectedFilter) {
      pokeApiService.getPokemonType({type: value}).then(resp => {
        setPokemon(resp);
      });
    } else {
      getPokemon();
    }
  }

  const onRefresh = (event: boolean) => {
    if (event) {
      getPokemon(false, true);
    }
  }

  const onCatchPokemon = (data: Pokemon) => {
    if (catchPokemon.length < 10) {
      setCatchPokemon((value: []) => {
        return [...value, data];
      });
      messageBoxOpen(data.name, 'success');
      setPlaySound({status: true, song: 'jump.mp3'});
  
      setTimeout(() => { setPlaySound({status: false, song: ''}); }, 2000);
    } else {
      messageBoxOpen('', 'warning');
    }
  }

  return (
    <Container>
      <Filter selectedType={onChangeFilter} onRefresh={onRefresh}/>
      <InfiniteScroll
          dataLength={pokemons.length}
          next={handleInfiniteScroll}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        <Grid container spacing="10">
          { pokemons.map((dt, idx) => 
              <Card key={idx} data={dt} doCatchPokemon={(dt: Pokemon) => onCatchPokemon(dt)}/>
          )}
        </Grid>
      </InfiniteScroll>
      <ReactHowler
        src={[isPlaySound.song]}
        playing={isPlaySound.status}
      />
    </Container>
  )
}

export default Home
