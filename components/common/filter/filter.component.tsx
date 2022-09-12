import styles from '../../../styles/filter.module.scss';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from "react";

import { PokemonType } from '../../../@core/entity/pokemon.entity';
import PokeApiService from '../../../service/poke-api.service';
import { Button, Stack } from '@mui/material';
import { ReloadOutlined } from '@ant-design/icons'

export default function Filter(prop: any) {
  const { selectedType = '', onRefresh = false } = prop;
  const pokeApiService = new PokeApiService();

  const [listType, setListType] = useState<PokemonType[]>([]);

  useEffect(() => {
    getPokemonTypeList();
  }, []);

  const getPokemonTypeList = () => {
    pokeApiService.getPokemonTypeList({type: ''}).then(resp => {
      setListType(resp);
    });
  };

  const onChangeFilter = (event: any) => {
    selectedType(event.target.value);
  };

  const onClickRefresh = () => {
    onRefresh(true);
  }

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <Button variant="outlined" startIcon={<ReloadOutlined />} onClick={onClickRefresh} style={{marginRight: '10px'}}>
        Poke
      </Button>
      <FormControl fullWidth className={styles.filterWrapper} sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Filter By Type Pokemon</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          onChange={onChangeFilter}
          label="Filter By Type Pokemon"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          { listType.map((dt, index) =>
              <MenuItem key={index} value={dt.name}>{dt.name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Stack>
  )
}