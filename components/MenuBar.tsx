"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';

export default function ButtonAppBar() {
  const theme = useTheme();
  // for screens smaller than 960px
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget as HTMLElement);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  useEffect(() => {
    const handleResize = () => {
      handleCloseNavMenu(); // Close menu when screen resizes
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#1D5AD5" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: 4 }} disableGutters>
          <Image 
            src='/mentra_logo.png'
            width={68}
            height={50}
            alt='Mentra Inc Logo'
          />

          {!isMobile ?
            (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button href="#home" sx={{ color: "white", fontWeight: 700 }}>
                  Home
                </Button>

                <Button href="#about-us" sx={{ color: "white", fontWeight: 700 }}>
                  About Us
                </Button>

                <Button href="#services" sx={{ color: "white", fontWeight: 700 }}>
                  Services
                </Button>

                <Button href="/" sx={{ color: "white", fontWeight: 700 }}>
                  Contact
                </Button>
            </Box>
            ) : 
            (
              <Box sx={{ position: 'relative', float: 'right' }}>
                  <IconButton 
                    size="large"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                  <MenuIcon />
                </IconButton>

                <Menu
                  anchorEl={anchorElNav}
                  keepMounted
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="#home">Home</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="#about-us">About Us</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="#services">Services</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="#contact">Contact</Link>
                  </MenuItem>
                </Menu>
              </Box>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}