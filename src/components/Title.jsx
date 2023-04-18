import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const MyTitle = styled(({ children, ...props }) => (
  <Typography {...props} variant="h5" component="h3">
    {children}
  </Typography>
))((theme) => ({
  fontWeight: 800,
}));

const Title = ({ children, ...props }) => {
  return <MyTitle {...props}>{children}</MyTitle>;
};

export default Title;
