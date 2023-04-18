import useTheme from "./hooks/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "./pages/MainLayout";
import ColorModeContext from "./contexts/ColorModeContext";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const { colorMode, theme } = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout />
        </ThemeProvider>
      </ColorModeContext.Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
