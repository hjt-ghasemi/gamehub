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
        borderRadius: 2,
        "&:hover , &.active": {
          backgroundColor: "#77777777",
        },
        padding: "4px 6px",
      }}
      className={genre.slug === query.genres ? "active" : ""}
      onClick={() =>
        setQuery((prevQuery) => ({
          ...prevQuery,
          search: "",
          genres: genre.slug,
        }))
      }
    >
      <Avatar
        alt={genre.name}
        src={getCroppedImageUrl(genre.image_background)}
        sx={{ marginRight: "20px" }}
      />
      <Typography variant="subtitle1" noWrap>
        {genre.name}
      </Typography>
    </Stack>
  );
};

export default GenreCard;
