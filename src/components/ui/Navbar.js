import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import {
  SwipeableDrawer,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  Toolbar,
  AppBar,
  Box,
  CardMedia,
  Stack,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router";

import Logo from "../../assets/airbnb.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";

const settings = ["SignUp", "Login"];

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);

    if (setting) {
      setting === "SignUp"
        ? navigate("/")
        : setting === "Login"
        ? navigate("/")
        : handleLogout();
    }
  };

  const handleLogout = () => {};

  return (
    <>
      <AppBar
        className={"main-header"}
        sx={{
          color: "#000",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CardMedia
              component="img"
              src={Logo}
              alt="hello"
              sx={{
                width: { xs: "13%", md: "100px" },
              }}
              // onClick={handleOpenNavMenu}
            />

            <Box
              sx={{
                flexGrow: { xs: 1, md: 0 },
              }}
            >
              <SwipeableDrawer
                sx={{ display: { xs: "flex", md: "none" } }}
                open={anchorElNav}
                onClose={handleCloseNavMenu}
                onOpen={handleCloseNavMenu}
              >
                <Box
                  role="presentation"
                  onClick={handleCloseNavMenu}
                  onKeyDown={handleCloseNavMenu}
                  sx={{
                    width: "fit-content",
                    marginTop: 2,
                    minWidth: "11rem",
                  }}
                >
                  {/* <List>
                    {pages.map(({ title, path }, index) => (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{
                          fontSize: 15,
                          fontWeight: "bold",
                          marginLeft: "12px",
                        }}
                      >
                        <ListItemButton onClick={() => handleNavigate(path)}>
                          <ListItemText primary={title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List> */}
                </Box>
              </SwipeableDrawer>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                marginLeft: "126px",
                height: "47px",
              }}
            >
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Anywhere | Anydesk  | Add guests"
                  deleteIcon={<SearchIcon />}
                  variant="outlined"
                />
              </Stack>
            </Box>
            <Box sx={{ flexGrow: 0, marginRight: "10px" }}>
              <Typography>Airbnb your home</Typography>
            </Box>

            <Box sx={{ flexGrow: 0, marginRight: "10px" }}>
              <LanguageIcon />
            </Box>

            <Box sx={{ flexGrow: 0, ml: 1 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", p: 10 }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => handleCloseUserMenu()}
              >
                {settings?.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box>
              <MenuIcon
                onClick={handleOpenNavMenu}
                sx={{ display: { md: "none", xs: "block" } }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
