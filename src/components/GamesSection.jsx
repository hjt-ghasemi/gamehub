import Container from "@mui/material/Container";
import PlatformsDropdown from "./PlatformsDropdown";
import GameTiles from "./GameTiles";

const GamesSection = () => {
  return (
    <Container maxWidth="xl">
      <PlatformsDropdown />
      <GameTiles />
    </Container>
  );
};

export default GamesSection;
