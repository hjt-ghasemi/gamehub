import useTheme from "./hooks/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "./pages/MainLayout";
import ColorModeContext from "./contexts/ColorModeContext";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import QueryContext from "./contexts/QueryContext";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const { colorMode, theme } = useTheme();
  const [query, setQuery] = useState({ genre: "" });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryContext.Provider value={[query, setQuery]}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout />
          </ThemeProvider>
        </ColorModeContext.Provider>
        <ReactQueryDevtools />
      </QueryContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
