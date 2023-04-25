import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingMore = ({ isLoading }) => {
  return (
    <Paper
      sx={{
        maxWidth: "200px",
        mx: "auto",
        width: "100%",
        padding: 2,
        display: "flex",
        justifyContent: "center",
        marginBottom: 4,
      }}
    >
      {isLoading ? (
        <CircularProgress thickness={3} color="inherit" />
      ) : (
        "Load more"
      )}
    </Paper>
  );
};

export default LoadingMore;
