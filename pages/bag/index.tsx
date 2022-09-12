import { Container, Grid } from '@mui/material';
import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import { Pokemon } from '../../@core/entity/pokemon.entity';
import { messageBoxOpen } from '../../components/common/message';
import Card from '../../components/common/card/card.component';
import PokeContext from '../../context/PokeContext';
import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';


const Bag: NextPage = () => {
  const {catchPokemon, setCatchPokemon} = useContext(PokeContext);
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [isPlaySound, setPlaySound] = useState({status: false, song: 'jump.mp3'});

  useEffect(() => {
    setPokemon(catchPokemon);
  }, [catchPokemon])

  const onRemovePokemon = (data: Pokemon) => {
    setCatchPokemon((value: Pokemon[]) => {
      let getPokemon = [...value];
      const getIdx = getPokemon.findIndex((dt) => dt.id === data.id);

      getPokemon.splice(getIdx, 1);

      return [...getPokemon];
    });

    messageBoxOpen(data.name, 'warning');

    setPlaySound({status: true, song: 'blop.mp3'});
    setTimeout(() => { setPlaySound({status: false, song: ''}); }, 2000);
  }

  return (
    <>
      <Container style={{marginTop: '20px'}}>
        { !pokemons.length && (
            <h3 style={{display: 'flex', justifyContent: 'center'}}><SentimentDissatisfiedSharpIcon/> No Pokemon...</h3>
          ) 
        }
        <Grid container spacing="10">
          { pokemons.map((dt, idx) => 
              <Card key={idx} data={dt} showDetail={true} doRemovePokemon={(dt: Pokemon) => onRemovePokemon(dt)}/>
          )}
        </Grid>
      </Container>
      <ReactHowler
        src={[isPlaySound.song]}
        playing={isPlaySound.status}
      />
    </>
  )
}

export default Bag
