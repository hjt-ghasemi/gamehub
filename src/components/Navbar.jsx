import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Box sx={{ py: 1, px: { md: 5, xs: 2 } }}>
      <Stack direction="row" alignItems="center">
        <Box>
          <Link
            href="/"
            sx={{
              width: "40px",
              height: "40px",
              display: "block",
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
            }}
          ></Link>
        </Box>
        <SearchInput />
        <DarkModeSwitch />
      </Stack>
    </Box>
  );
};

export default Navbar;
