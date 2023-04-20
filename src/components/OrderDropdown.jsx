import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useContext, useState } from "react";
import QueryContext from "../contexts/QueryContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const OrderDropdown = () => {
  const orders = [
    { label: "Relenvance", slug: "" },
    { label: "Name", slug: "name" },
    { label: "Release date", slug: "released" },
    { label: "Critic", slug: "-metacritic" },
  ];

  const selectedOrder = (slug) => {
    const index = orders.findIndex((order) => order.slug === slug);
    return orders[index].label;
  };

  const [query, setQuery] = useContext(QueryContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (sortBy) => {
    setAnchorEl(null);
    setQuery((prevQuery) => ({
      ...prevQuery,
      ordering: sortBy,
    }));
  };

  console.log(query);

  return (
    <Box>
      <Button
        id="sort-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Order by: {selectedOrder(query.ordering)}
      </Button>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "sort-button",
        }}
      >
        {orders.map((order) => (
          <MenuItem key={order.slug} onClick={() => handleSelect(order.slug)}>
            {order.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default OrderDropdown;
