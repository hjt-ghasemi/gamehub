import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { useContext, useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QueryContext from "../contexts/QueryContext";

const PlatformsDropdown = () => {
  const { platforms, error, isLoading } = usePlatforms();
  const [query, setQuery] = useContext(QueryContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (id) => {
    setAnchorEl(null);
    setQuery((prevQuery) => ({
      ...prevQuery,
      parent_platforms: id,
    }));
  };

  if (error) return null;

  console.log(query);

  const selectedPlatform = (id) => {
    if (!platforms) return null;
    const index = platforms.findIndex((platform) => id === platform.id);
    return platforms[index]?.name;
  };

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
        <span>{selectedPlatform(query.parent_platforms) || "platforms"}</span>
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
        {platforms.map((platform) => (
          <MenuItem key={platform.id} onClick={() => handleSelect(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default PlatformsDropdown;
