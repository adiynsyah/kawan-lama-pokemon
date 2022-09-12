import { createContext, useState } from 'react';
import { Pokemon } from '../@core/entity/pokemon.entity';

const PokeContext = createContext<{catchPokemon: Array<Pokemon>, setCatchPokemon: any}>({
  catchPokemon: [],
  setCatchPokemon: null
});

export const PokeProvider = (props: { children: any }) => {
  const {children} = props;
  const [catchPokemon, setCatchPokemon] = useState([]);

  return (
    <PokeContext.Provider
      value={{
        catchPokemon,
        setCatchPokemon
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}

export default PokeContext;


