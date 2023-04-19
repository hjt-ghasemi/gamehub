import Chip from "@mui/material/Chip";
import { lightGreen, amber, red } from "@mui/material/colors";

const CriticScore = ({ score }) => {
  const color =
    score > 80 ? lightGreen[500] : score > 60 ? amber[500] : red[500];
  return (
    <Chip
      sx={{
        marginLeft: "auto",
        fontWeight: 700,
        borderRadius: 2,
        fontSize: "1rem",
        color,
        borderColor: color,
      }}
      label={score}
      variant="outlined"
      size="small"
    />
  );
};

export default CriticScore;
