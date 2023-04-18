import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const PlatformsDropdown = () => {
  const { data, error, isLoading } = usePlatforms();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (error) return null;

  return (
    <Box>
      <LoadingButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        loading={isLoading}
        loadingPosition="end"
      >
        <span>Platformse</span>
      </LoadingButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {data?.data.results.map((platform) => (
          <MenuItem key={platform.id} onClick={handleClose}>
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default PlatformsDropdown;
