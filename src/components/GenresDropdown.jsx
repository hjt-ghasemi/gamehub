import { useContext, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QueryContext from "../contexts/QueryContext";
import useGenres from "../hooks/useGenres";

const GenresDropdown = () => {
  const { genres, error, isLoading } = useGenres();
  const [query, setQuery] = useContext(QueryContext);
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (genre) => {
    setAnchorEl(null);
    setQuery((prevQuery) => ({
      ...prevQuery,
      search: "",
      genres: genre,
    }));
  };

  if (error || !matches) return null;

  const selectedGenre = (slug) => {
    if (!genres) return null;
    const index = genres.findIndex((genre) => slug === genre.slug);
    return genres[index]?.name;
  };

  return (
    <Box>
      <LoadingButton
        id="genre-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        loading={isLoading}
        loadingPosition="end"
      >
        <span>genres: {selectedGenre(query.genres) || "all"}</span>
      </LoadingButton>
      <Menu
        id="genre-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem key="all" onClick={() => handleSelect("")}>
          All
        </MenuItem>
        {genres.map((genres) => (
          <MenuItem key={genres.id} onClick={() => handleSelect(genres.slug)}>
            {genres.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default GenresDropdown;
