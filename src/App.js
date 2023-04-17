import useTheme from "./useTheme";
import { createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "./pages/MainLayout";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const { colorMode, theme } = useTheme();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
