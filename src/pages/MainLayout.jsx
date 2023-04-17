import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const MainLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "blue" }}>navbar</Box>
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "block" } }} md="auto">
          <Box sx={{ backgroundColor: "red" }}>aside</Box>
        </Grid>
        <Grid item xs={12} md>
          <Box sx={{ backgroundColor: "gold" }}>main</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
