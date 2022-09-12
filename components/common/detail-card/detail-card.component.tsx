import Image from 'next/image'
import styles from '../../../styles/detail-card.module.scss';
import Dialog from '@mui/material/Dialog';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import DialogContent from '@mui/material/DialogContent';
import { PokemonDetailMapper } from '../../../@core/usecase/interface/get-pokemon-detail.interface';


export default function DetailCard(props: {data: PokemonDetailMapper, isOpen: boolean, setHandleClosed: any}) {
  const {data, isOpen, setHandleClosed} = props;

  const handleClosed = () => {
    setHandleClosed(true)
  }

  const imgPokemonDetail = (data: any) => {
    return data.sprites.frontShiny ? data.sprites.frontShiny : data.sprites.frontDefault;
  }

  return (
    <Dialog open={isOpen} onClose={handleClosed} maxWidth="md" fullWidth={true}>
      <DialogContent>
      <Grid container spacing="10">
        <Grid item xs={12} md={4}>
          <div className={styles.leftCard}>
            <Image loader={() => imgPokemonDetail(data)} src={imgPokemonDetail(data)} alt="detail" width={150} height={150}/>
            <div>{data.name}</div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.centerCard}>
            <div className={styles.contentCenter}>
              <div className={styles.title}>Type</div>
              <Stack spacing={1} direction="row">
              {
                data.types.map((dt, idx) => 
                  <Chip key={idx} label={dt.name} size="small" color="secondary"/>
                )
              }
              </Stack>
            </div>
            <div className={styles.contentCenter}>
              <div className={styles.title}>Abilities</div>
              <Stack spacing={1} direction="row">
                {
                  data.abilities.map((dt, idx) => 
                    <Chip key={idx} label={dt.name} size="small" color="primary"/>
                  )
                }
              </Stack>
            </div>
            <div className={styles.contentCenter}>
              <Grid container spacing="3">
                { data.stats.map((dt, idx) =>
                    <Grid item xs={6} md={6} key={idx}>
                      <div className={styles.statWrapper}>
                        <span>{dt.name}</span>
                        <span>{dt.baseStat}</span>
                      </div>
                    </Grid>
                )}
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.rightCard}>
            <div className={styles.title}>Moves</div>
            <div className={styles.stackMoves}>
              {
                data.moves.slice(0, 19).map((dt, idx) => 
                  <Chip key={idx} label={dt.name} size="small" color="default"/>
                )
              }
            </div>
          </div>
        </Grid>
      </Grid>
      </DialogContent>
    </Dialog>
  );
}