import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import GameTiles from "./GameTiles";
import PlatformsDropdown from "./PlatformsDropdown";
import OrderDropdown from "./OrderDropdown";
import CriteriaChips from "./CriteriaChips";
import GenresDropdown from "./GenresDropdown";

const GamesSection = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" sx={{ marginBottom: 2 }} flexWrap="wrap">
        <GenresDropdown />
        <PlatformsDropdown />
        <OrderDropdown />
        <CriteriaChips />
      </Stack>
      <GameTiles />
    </Container>
  );
};

export default GamesSection;
