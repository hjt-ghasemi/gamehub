import Container from "@mui/material/Container";
import PlatformsDropdown from "./PlatformsDropdown";
import GameTiles from "./GameTiles";
import Stack from "@mui/material/Stack";
import OrderDropdown from "./OrderDropdown";

const GamesSection = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row">
        <PlatformsDropdown />
        <OrderDropdown />
      </Stack>
      <GameTiles />
    </Container>
  );
};

export default GamesSection;
