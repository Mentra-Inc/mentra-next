"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Menu, MenuItem, styled, useMediaQuery, useTheme, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import { User } from '@/types/applicationTypes';
import { useRouter } from 'next/navigation';

export default function MenuBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [anchorElUserMenu, setAnchorElUserMenu] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUserMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUserMenu(null);
  };

  const handleLogout = async () => {
    if(!anchorElNav) handleCloseNavMenu(); 
    if(!anchorElUserMenu) handleCloseUserMenu();

    await fetch('/api/logout');
    router.refresh();
  };

  useEffect(() => {
    const fetchUser = async () => {
      let res = await fetch('/api/currentUser');

      if (res.ok) {
        const resUser = await res.json() as User;
        setUser(resUser);
      }
    };

    const handleResize = () => {
      // Close menus when screen resizes
      handleCloseNavMenu(); 
      handleCloseUserMenu();
    };

    fetchUser();
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
              {user ? (
                <>
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{
                      border: "2px solid white",
                      color: "white",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <PersonIcon sx={{ mr: 1 }} />
                    {user.email || "N/A"}
                  </Button>
                  <Menu
                    anchorEl={anchorElUserMenu}
                    open={Boolean(anchorElUserMenu)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              ) :
              <NavButton href='/login'>
                Login
              </NavButton>
              }
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
                {user ?
                  <MenuItem onClick={handleLogout}>
                    Logged in as: {user.email}
                  </MenuItem> :
                  <MenuItem onClick={() => router.push("/login")}>
                    Login
                  </MenuItem>
                }
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
