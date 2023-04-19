import Container from "@mui/material/Container";

import useGames from "../hooks/useGames";
import { Grid, Stack } from "@mui/material";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameTiles = () => {
  const { games, isLoading, error, isFetching, cols } = useGames();

  if (error) return <h1>{error.message}</h1>;

  let loadingResponse;

  if (isLoading) {
    loadingResponse = [];
    for (let i = 0; i < cols; i++) {
      loadingResponse.push(
        <Grid item xs key={i}>
          <GameCardSkeleton />
        </Grid>
      );
    }
  }

  return (
    <Grid container spacing={4}>
      {loadingResponse ||
        games.map((gamesCol, idx) => (
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
