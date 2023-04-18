import Container from "@mui/material/Container";

import useGames from "../hooks/useGames";
import { Grid, Stack } from "@mui/material";
import GameCard from "./GameCard";

const GameTiles = () => {
  const { games, isLoading, error, isFetching } = useGames();

  if (error) return <h1>{error.message}</h1>;

  return (
    <Grid container spacing={4}>
      {games.map((gamesCol, idx) => (
        <Grid item xs key={idx}>
          <Stack spacing={4}>
            {gamesCol.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameTiles;
