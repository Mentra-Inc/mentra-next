"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Menu, MenuItem, styled, useMediaQuery, useTheme, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';

export default function MenuBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget as HTMLElement);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleResize = () => {
      handleCloseNavMenu(); // Close menu when screen resizes
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavButton = styled(Button)({
    color: 'white',
    fontWeight: 700,
  });
  
  const NavLink = styled(Link)({
    textDecoration: 'none',
    color: 'black'
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Toolbar sx={{ justifyContent: "space-between", px: 6 }} disableGutters>
          <Box
            component="img"
            src="/mentra_logo.png"
            alt="Mentra Inc Logo"
            width={68}
            height={50}
            sx={{ width: 68, height: 50 }}
          />

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              <NavButton href="#">Home</NavButton>
              <NavButton href="#about-us">About Us</NavButton>
              <NavButton href="#services">Services</NavButton>
              <NavButton href="#contact">Contact</NavButton>
            </Box>
          ) : (
            <Box>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>

              <Menu anchorEl={anchorElNav} keepMounted open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink href="#">Home</NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink href="#about-us">About Us</NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink href="#services">Services</NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink href="#contact">Contact</NavLink>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}