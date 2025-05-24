import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {useGlobalContext} from "../context/GlobalContext.tsx";
import {Box, Container, Grid, Typography} from "@mui/material";

export const WhyShop = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    const {isMobile} = useGlobalContext();
    const grid_view = isMobile ? 12 : 4;
    const aos_mobile = "fade-up";
    return (
        <Container maxWidth="lg" sx={{py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {/*<h2 data-aos="fade-up" style={{textAlign: 'center', fontSize: '2rem', marginBottom: '2rem'}}>Why Shop At Peddlr</h2>*/}
            <Typography data-aos='fade-right' variant={'h3'}>Why Shop At Peddlr</Typography>
            <div data-aos={aos_mobile}>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={grid_view} height={'100%'}>
                        <div
                            style={{
                                background: '#fff',
                                padding: '1rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                height: '100%'
                            }}>
                            <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcC3YLEtR91gNB7yr4ltIfEU6pSQWTKzRVDhHu"
                                 alt="Buy & sell gear easily"
                                 style={{width: '100px', margin: '0 auto'}}/>
                            <Typography variant={'h5'}>Buy & sell gear easily</Typography>
                            <Typography>Buying and selling gear is fast, easy, and built for musicians. List your pedals in minutes or find
                                trusted gear
                                without the hassle or high fees.</Typography>
                        </div>
                    </Grid>
                    <Grid size={grid_view} height={'100%'}>
                        <div
                            style={{
                                background: '#fff',
                                padding: '1rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                height: '100%'
                            }}>
                            <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcZCw69IWwA2ypmiusIcz9RbDKgn8CXlQehMF6" alt="Safe Community"
                                 style={{width: '100px', margin: '0 auto'}}/>
                            <Typography variant={'h5'}>Safe Community of Musicians</Typography>
                            <Typography>A trusted space for musicians, with verified users and reviewed listings to keep the community safe,
                                respectful, and
                                scam-free.</Typography>
                        </div>
                    </Grid>
                    <Grid size={grid_view} height={'100%'}>
                        <div
                            style={{
                                background: '#fff',
                                padding: '1rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                height: '100%'
                            }}>
                            <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcrhKBHA9ZspltSDXCKH7ja1yYd039on5zvEFq" alt="Verified listings"
                                 style={{width: '100px', margin: '0 auto'}}/>
                            <Typography variant={'h5'}>Verified listings</Typography>
                            <Typography>Every listing is reviewed for accuracy and legitimacy, so you can shop with confidence and skip the
                                sketchy
                                deals.</Typography>
                        </div>
                    </Grid>

                    <Grid size={grid_view} height={'100%'}>

                        <div
                            style={{
                                background: '#fff',
                                padding: '1rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                height: '100%'
                            }}>
                            <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcC3YLEtR91gNB7yr4ltIfEU6pSQWTKzRVDhHu"
                                 alt="Buy & sell gear easily"
                                 style={{width: '100px', margin: '0 auto'}}/>
                            <Typography variant={'h5'}>Fair Pricing, No Surprises</Typography>
                            <Typography>Buying and selling gear is fast, easy, and built for musicians. List your pedals in minutes or find
                                trusted gear
                                without the hassle or high fees.</Typography>
                        </div>
                    </Grid>
                    <Grid size={grid_view} height={'100%'}>
                        <Box>
                            <div
                                style={{
                                    background: '#fff',
                                    padding: '1rem',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    height: '100%'
                                }}>
                                <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcZCw69IWwA2ypmiusIcz9RbDKgn8CXlQehMF6" alt="Safe Community"
                                     style={{width: '100px', margin: '0 auto'}}/>
                                <Typography variant={'h5'}>Fast & Secure Payments</Typography>
                                <Typography>We believe in transparent pricing. No hidden fees, no surprise costs — just fair deals between
                                    musicians, so you keep more of what your gear is worth.
                                </Typography>
                            </div>
                        </Box>
                    </Grid>
                    <Grid size={grid_view} height={'100%'}>
                        <div
                            style={{
                                background: '#fff',
                                padding: '1rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                height: '100%'
                            }}>
                            <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcrhKBHA9ZspltSDXCKH7ja1yYd039on5zvEFq" alt="Verified listings"
                                 style={{width: '100px', margin: '0 auto'}}/>
                            <Typography variant={'h5'}>Community-Driven Reviews</Typography>
                            <Typography>Get insights from real musicians. Our review system helps you choose gear confidently, with honest
                                feedback from fellow artists who’ve been there and played that.</Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}