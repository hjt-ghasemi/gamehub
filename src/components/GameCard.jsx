import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const GameCard = ({ game }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={game.name}
        height="200"
        image={game.background_image}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {game.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
