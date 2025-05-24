import {Container, Grid, Box, Typography} from '@mui/material';
import {useGlobalContext} from "./context/GlobalContext.tsx";
import {useEffect} from "react";
import AOS from "aos";

export const About = () => {
    const {isMobile} = useGlobalContext();
    const grid_view_p = isMobile ? 12 : 8;
    const grid_view_s = isMobile ? 12 : 4;
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);
    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <Typography data-aos='fade-right' variant="h3" component="h1" align="center" gutterBottom>
                Welcome to my online effects pedal marketplace!
            </Typography>


            <Grid container spacing={4} alignItems="center">
                <Grid size={grid_view_s} data-aos='fade-right'>
                    <Box
                        component="img"
                        src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc5sxQDBJABUu6E8h0moi1SFxkt2cMayWZO7XT"
                        alt="Effects Pedals Showcase"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 2,
                            boxShadow: 3
                        }}
                    />
                </Grid>
                <Grid size={grid_view_p} data-aos='fade-right'>
                    <Box>

                        <Typography>
                            My name is Tyler, and I created this platform out of a deep love for effects pedals and the vibrant community
                            that surrounds them.
                        </Typography>
                        <Typography>
                            As a drummer, I was always fascinated by the magical sounds that effects pedals could produce. Even though I
                            couldn't use them directly in my drumming, I was infatuated with the way they shaped the music of my favorite
                            artists and bandmates. This passion led me to explore the world of effects pedals extensively, appreciating
                            their unique capabilities and the creativity they inspire.
                        </Typography>
                        <Typography>
                            After spending several fulfilling years as a stay-at-home parent, I decided to turn joy for pedals into a
                            solution for everyone. I wanted to create a space where fellow musicians could find the perfect effects pedals
                            to enhance their sound, without spending too much coin experimenting with pedals that may or may not be the
                            right fit.
                        </Typography>
                        <Typography>
                            Our marketplace is dedicated to offering a curated selection of the best effects pedals available, ranging from
                            classic staples to innovative new designs. Each pedal is chosen with care, ensuring it meets the high standards
                            of quality and creativity that I hold dear.
                        </Typography>
                        <Typography>
                            Beyond just a marketplace, I aim to foster a community where musicians can share their experiences, discover new
                            sounds, and find inspiration. Whether you're a seasoned professional or just starting your musical journey, I'm
                            here to help you find the pedals that will unlock new dimensions of your music.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};