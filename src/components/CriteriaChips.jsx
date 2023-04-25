import { Box, Chip } from "@mui/material";
import { useCallback, useContext } from "react";
import QueryContext from "../contexts/QueryContext";

const CriteriaChips = () => {
  const [query, setQuery] = useContext(QueryContext);

  const handleClearGenre = useCallback(() => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      genres: "",
    }));
  }, []);

  const handleClearSearch = useCallback(() => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      search: "",
    }));
  }, []);

  return (
    <Box sx={{ flex: "100%" }}>
      {query.genres && (
        <Chip
          label={`Genre: ${query.genres}`}
          variant="outlined"
          onDelete={handleClearGenre}
        />
      )}
      {query.search && (
        <Chip
          label={`Search By: ${query.search}`}
          variant="outlined"
          onDelete={handleClearSearch}
        />
      )}
    </Box>
  );
};

export default CriteriaChips;
