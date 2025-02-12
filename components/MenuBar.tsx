"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { Button, Menu, MenuItem, styled, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { SPACING, SIZES, COLORS } from '@/lib/stylingConstants';

export default function ButtonAppBar() {
  const theme = useTheme();
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

  const NavButton = styled(Button)({
    color: 'white',
    fontWeight: 700
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: COLORS.SECONDARY }}>
        <Toolbar sx={{ justifyContent: "space-between", px: SPACING.SM_SPACING }} disableGutters>
          <Image 
            src='/mentra_logo.png'
            width={SIZES.LOGO_IMG.WIDTH}
            height={SIZES.LOGO_IMG.HEIGHT}
            alt='Mentra Inc LOGO_IMG'
          />

          {!isMobile ?
            (
              <Box sx={{ display: "flex", gap: SPACING.XS_SPACING }}>
                <NavButton href="#home">Home</NavButton>

                <NavButton href="#about-us">About Us</NavButton>
                
                <NavButton href="#services">Services</NavButton>

                <NavButton href="/">Contact</NavButton>
            </Box>
            ) : 
            (
              <Box>
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