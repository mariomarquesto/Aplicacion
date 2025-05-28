import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

export default function NavBar({ darkMode, handleThemeChange }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinkStyle = {
    color: "inherit",
    textDecoration: "none",
    "&.active": {
      color: "secondary.main",
    },
  };

  const renderLinks = (links: { title: string; path: string }[]) =>
    links.map(({ title, path }) => (
      <ListItemButton
        component={NavLink}
        to={path}
        key={path}
        sx={navLinkStyle}
        onClick={() => setDrawerOpen(false)}
      >
        <ListItemText primary={title.toUpperCase()} />
      </ListItemButton>
    ));

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            Mi Tienda
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Switch checked={darkMode} onChange={handleThemeChange} />

            {/* IconButton carrito */}
            <IconButton
              component={NavLink}
              to="/cart"
              size="large"
              aria-label="shopping cart"
              color="inherit"
            >
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {renderLinks(midLinks)}
                {renderLinks(rightLinks)}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>{renderLinks(midLinks)}</List>
          <List>{renderLinks(rightLinks)}</List>
        </Box>
      </Drawer>
    </>
  );
}
