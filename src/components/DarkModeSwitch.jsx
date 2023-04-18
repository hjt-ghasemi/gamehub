import Box from "@mui/material/Box";
import { DarkModeSwitch as Switch } from "react-toggle-dark-mode";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import ColorModeContext from "../contexts/ColorModeContext";

const DarkModeSwitch = () => {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark" ? true : false;
  const colorMode = useContext(ColorModeContext);

  return (
    <Switch
      checked={isDarkMode}
      onChange={colorMode.toggleColorMode}
      size={30}
    />
  );
};

export default DarkModeSwitch;
