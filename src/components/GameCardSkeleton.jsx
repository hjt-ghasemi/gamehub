import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const GameCardSkeleton = ({ game }) => {
  return (
    <Card>
      <CardMedia height="200">
        <Skeleton variant="rectangular" height={200} />
      </CardMedia>
      <CardContent>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
