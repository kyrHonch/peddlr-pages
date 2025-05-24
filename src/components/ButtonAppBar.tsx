import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

// Create scroll trigger for transparency effect
const ElevationScroll = (props: { children: React.ReactElement }) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    sx: {
      backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(8px)',
      transition: 'all 0.3s ease-in-out',
    }
  });
};

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s',
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '95%',
  borderRadius: '30px',
  margin: '10px 0',
  [theme.breakpoints.up('sm')]: {
    width: '90%',
    padding: theme.spacing(1, 3),
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
    padding: theme.spacing(1, 4),
  },
  [theme.breakpoints.up('lg')]: {
    width: '70%',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 800,
  cursor: 'pointer',
  background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '1.5rem',
  letterSpacing: '0.5px',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
    textAlign: 'left',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1.5),
  borderRadius: '20px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
  padding: theme.spacing(0.75, 2),
  transition: 'all 0.2s',
  color: '#1a1a1a',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(2.5),
  },
}));

const NavButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '20px',
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: '12px',
  margin: theme.spacing(0.5, 1),
  fontWeight: 500,
  color: '#1a1a1a',
  transition: 'all 0.2s',
  '&:hover': {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    transform: 'translateX(4px)',
  },
}));

export default function ButtonAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Features', to: 'why-shop' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll>
          <StyledAppBar>
            <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 70 } }}>
              {isMobile && (
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={handleMenuClick}
                      sx={{
                        color: '#1a1a1a',
                        ml: 1,
                        transition: 'all 0.2s',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.05)',
                          transform: 'rotate(90deg)',
                        }
                      }}
                  >
                    <MenuIcon />
                  </IconButton>
              )}

              <Logo variant="h6" >
                Peddlr
              </Logo>

              <NavButtonsContainer>
                {navItems.map((item) => (
                    <ScrollLink key={item.name} to={item.to} smooth duration={500} offset={-70}>
                      <NavButton color="inherit">{item.name}</NavButton>
                    </ScrollLink>
                ))}
              </NavButtonsContainer>

              {isMobile && (
                  <Box sx={{ width: 48 }} />
              )}
            </Toolbar>
          </StyledAppBar>
        </ElevationScroll>

        {isMobile && (
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                TransitionComponent={Fade}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
              {navItems.map((item) => (
                  <ScrollLink
                      key={item.name}
                      to={item.to}
                      smooth
                      duration={500}
                      offset={-70}
                      style={{ textDecoration: 'none' }}
                  >
                    <StyledMenuItem onClick={handleMenuClose}>
                      {item.name}
                    </StyledMenuItem>
                  </ScrollLink>
              ))}
            </StyledMenu>
        )}

        <Toolbar sx={{ minHeight: { xs: 64, md: 70 } }} /> {/* Spacer for fixed AppBar */}
      </Box>
  );
}