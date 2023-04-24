import { useContext, useRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import { BsSearch } from "react-icons/bs";
import { cleanState } from "../services/paramsComposer";
import QueryContext from "../contexts/QueryContext";
import { useEffect } from "react";

const SearchInput = () => {
  const search = useRef(null);
  const [query, setQuery] = useContext(QueryContext);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setQuery({ ...cleanState, search: search.current.value });
    }
  };

  useEffect(() => {
    if (query.search === "") search.current.value = "";
  }, [query]);

  return (
    <Stack sx={{ flex: 1 }} alignItems="center" px={2}>
      <Input
        sx={{
          maxWidth: "600px",
          border: "1px solid #77777777",
          borderRadius: 7,
          mx: "auto",
          width: "100%",
          padding: "1px 10px",
        }}
        placeholder="search game"
        startAdornment={
          <InputAdornment position="start">
            <BsSearch />
          </InputAdornment>
        }
        disableUnderline
        inputRef={search}
        onKeyDown={handleKeyPress}
      />
    </Stack>
  );
};

export default SearchInput;
