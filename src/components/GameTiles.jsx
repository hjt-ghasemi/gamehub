import useGames from "../hooks/useGames";
import { Button, Grid, Stack, Typography } from "@mui/material";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useEffect } from "react";
import { useCallback } from "react";

const GameTiles = () => {
  const {
    games,
    error,
    status,
    cols,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames();

  const windowEvent = useCallback(() => {
    const shouldFetch =
      document.body.scrollHeight - Math.ceil(window.scrollY) <=
      window.innerHeight;

    if (shouldFetch) fetchNextPage();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", windowEvent);

    return () => {
      window.removeEventListener("scroll", windowEvent);
    };
  }, [windowEvent]);

  if (error) return <h1>{error.message}</h1>;

  let loadingResponse;

  if (status === "loading") {
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
        games.map((gamesCol, idx) => {
          console.log(gamesCol);
          return (
            <Grid item xs={12 / cols} key={idx}>
              <Stack spacing={4}>
                {gamesCol.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </Stack>
            </Grid>
          );
        })}
      <Grid item xs={12}>
        {hasNextPage && (
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            {isFetchingNextPage ? "loading..." : "load more"}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default GameTiles;
