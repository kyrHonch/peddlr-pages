import { useState, useEffect } from 'react';
import { Box, Typography, Container, Fade, Grow } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Parallax } from "react-scroll-parallax";

// Keyframe animations
const gradientShift = keyframes`
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    padding: theme.spacing(4, 2),
    background: `
    linear-gradient(135deg, 
      rgba(255, 255, 255, 1) 0%, 
      rgba(248, 250, 252, 1) 25%, 
      rgba(241, 245, 249, 1) 75%, 
      rgba(226, 232, 240, 1) 100%
    )
  `,
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
    `,
        animation: `${pulse} 8s ease-in-out infinite`,
        zIndex: 0,
    },
}));

const FloatingElement = styled(Box)(() => ({
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    animation: `${float} 6s ease-in-out infinite 0s`,
    zIndex: 0,
}));

const MainTitle = styled(Typography)(({ theme }) => ({
    fontSize: 'clamp(3rem, 12vw, 8rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    lineHeight: 0.9,
    margin: 0,
    marginBottom: theme.spacing(4),
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 25%, #ec4899 50%, #f59e0b 75%, #3b82f6 100%)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: `${gradientShift} 8s ease infinite`,
    filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))',
    position: 'relative',
    zIndex: 1,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    position: 'relative',
    zIndex: 1,
    '& img': {
        width: '300px',
        maxWidth: '90vw',
        height: 'auto',
        borderRadius: '30px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(59, 130, 246, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        '&:hover': {
            transform: 'translateY(-10px) scale(1.05)',
            boxShadow: '0 35px 80px rgba(0, 0, 0, 0.2), 0 15px 35px rgba(59, 130, 246, 0.3)',
        },
    },
}));

const SubtitleContainer = styled(Box)(({ theme }) => ({
    maxWidth: '700px',
    margin: '0 auto',
    padding: theme.spacing(2),
    position: 'relative',
    zIndex: 1,
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
    fontSize: '1.25rem',
    lineHeight: 1.6,
    fontWeight: 600,
    color: '#374151',
    marginBottom: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    padding: theme.spacing(3),
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
        padding: theme.spacing(2.5),
    },
}));

const HighlightText = styled('span')(() => ({
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
}));

export const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <HeroContainer id="hero">
            {/* Floating background elements */}
            <FloatingElement
                sx={{
                    top: '10%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                }}
            />
            <FloatingElement

                sx={{
                    top: '20%',
                    right: '15%',
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(251, 146, 60, 0.1))',
                }}
            />
            <FloatingElement
                sx={{
                    bottom: '15%',
                    left: '20%',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.08))',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Main Title */}
                <Fade in={isLoaded} timeout={1000}>
                    <MainTitle variant="h1" >
                        Peddlr
                    </MainTitle>
                </Fade>

                {/* Logo with Parallax */}
                <Grow in={isLoaded} timeout={1500}>
                    <LogoContainer>
                        <Parallax speed={15}>
                            <img
                                src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc5sxQDBJABUu6E8h0moi1SFxkt2cMayWZO7XT"
                                alt="Peddlr Logo"
                            />
                        </Parallax>
                    </LogoContainer>
                </Grow>

                {/* Subtitle with Parallax */}
                <Fade in={isLoaded} timeout={2000}>
                    <SubtitleContainer>
                        <Parallax speed={-5}>
                            <SubtitleText variant="h3" >
                                The <HighlightText>Marketplace</HighlightText> for the FX-Obsessed
                                <br />
                                <Box component="span" sx={{ fontSize: '1rem', fontWeight: 500, opacity: 0.9 }}>
                                    Launching soon. Join the movement. Trade gear. Support builders. Skip the middleman.
                                    <br />
                                    The marketplace where the <HighlightText>pedal people</HighlightText> and <HighlightText>synth heads</HighlightText> connect!
                                </Box>
                            </SubtitleText>
                        </Parallax>
                    </SubtitleContainer>
                </Fade>
            </Container>
        </HeroContainer>
    );
};