import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import { BsSearch } from "react-icons/bs";
import { useContext, useRef } from "react";
import QueryContext from "../contexts/QueryContext";
import { cleanState } from "../services/paramsComposer";

const SearchInput = () => {
  const search = useRef(null);
  const [query, setQuery] = useContext(QueryContext);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setQuery({ ...cleanState, search: search.current.value });
    }
  };

  return (
    <Stack sx={{ flex: 1 }} alignItems="center">
      <Input
        sx={{
          maxWidth: "600px",
          border: "1px solid #77777777",
          borderRadius: 7,
          mx: "auto",
          width: "100%",
          padding: "5px 10px",
        }}
        placeholder="Search game"
        startAdornment={
          <InputAdornment position="start">
            <BsSearch />
          </InputAdornment>
        }
        disableUnderline
        inputRef={search}
        onKeyDown={handleKeyPress}
        defaultValue={query.search}
      />
    </Stack>
  );
};

export default SearchInput;
