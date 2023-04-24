import { useMediaQuery, useTheme } from "@mui/material";

export default function useTileCreator(pages) {
  const theme = useTheme();

  const gtMd = useMediaQuery(theme.breakpoints.up("md"));
  const gtSm = useMediaQuery(theme.breakpoints.up("sm"));

  let cols = 1;

  if (gtMd) {
    cols = 3;
  } else if (gtSm) {
    cols = 2;
  }

  const tiledGames = [];

  if (!pages || !pages[0]?.data.results.length) return { tiledGames, cols };

  const games = [];

  pages.forEach((page) => {
    games.push(...page.data.results);
  });

  for (let i = 0; i < cols; i++) tiledGames[i] = [];

  let pointer = 0;
  for (let i = 0; i < games.length; i++) {
    if (pointer >= cols) pointer = 0;
    tiledGames[pointer++]?.push(games[i]);
  }

  return { tiledGames, cols };
}
