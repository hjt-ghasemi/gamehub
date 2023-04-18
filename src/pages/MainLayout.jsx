import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
import GameTiles from "../components/GameTiles";

const MainLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "block" } }} md="auto">
          <Box sx={{ backgroundColor: "red" }}>aside</Box>
        </Grid>
        <Grid item xs={12} md>
          <GameTiles />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;