import Container from "@mui/material/Container";

import useGames from "../hooks/useGames";
import { Grid } from "@mui/material";

const GameTiles = () => {
  const { games, isLoading, error, isFetching } = useGames();

  if (error) return <h1>error.message</h1>;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        {isFetching && <h1>Loading</h1>}
      </Grid>
    </Container>
  );
};

export default GameTiles;
