import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlatformIconsList from "./PlatformIconsList";
import Title from "./Title";
import getCroppedImageUrl from "../services/imageUrlService";

const GameCard = ({ game }) => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        alt={game.name}
        height="200"
        image={getCroppedImageUrl(game.background_image)}
      />
      <CardContent>
        <PlatformIconsList
          score={game.metacritic}
          platforms={game.parent_platforms}
        />
        <Title>{game.name}</Title>
      </CardContent>
    </Card>
  );
};

export default GameCard;
