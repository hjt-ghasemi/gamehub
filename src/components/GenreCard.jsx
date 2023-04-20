import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import getCroppedImageUrl from "../services/imageUrlService";
import { useContext } from "react";
import QueryContext from "../contexts/QueryContext";

const GenreCard = ({ genre }) => {
  const [query, setQuery] = useContext(QueryContext);

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        cursor: "pointer",
        padding: 1,
        borderRadius: 1,
        "&:hover , &.active": {
          backgroundColor: "#77777777",
        },
      }}
      className={genre.slug === query.genre ? "active" : ""}
      onClick={() =>
        setQuery((prevQuery) => ({
          ...prevQuery,
          genre: genre.slug,
        }))
      }
    >
      <Avatar
        alt={genre.name}
        src={getCroppedImageUrl(genre.image_background)}
        sx={{ marginRight: "20px" }}
      />
      <Typography variant="h6">{genre.name}</Typography>
    </Stack>
  );
};

export default GenreCard;
