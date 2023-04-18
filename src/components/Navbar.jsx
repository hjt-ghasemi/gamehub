import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import logo from "../assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  return (
    <Box sx={{ py: 1, px: 5 }}>
      <Stack direction="row" alignItems="center">
        <Box>
          <Link
            href="#"
            sx={{
              width: "64px",
              height: "64px",
              display: "block",
              backgroundImage: `url(${logo})`,
            }}
          ></Link>
        </Box>
        <Box sx={{ flex: 1, height: "40px", background: "#ffffff44" }}></Box>
        <Box>
          <DarkModeSwitch />
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
