import {ParallaxProvider} from 'react-scroll-parallax';
import {GridView} from "./components/GridView.tsx";
import {About} from "./About.tsx";
import {WhyShop} from "./components/WhyShop.tsx";
import {GlobalProvider} from "./context/GlobalContext.tsx";
import ButtonAppBar from "./components/ButtonAppBar.tsx";
import {HeroSection} from "./components/HeroSection.tsx";

const App = () => {


    return (
        <GlobalProvider>
            <ParallaxProvider>
                {/* Navbar*/}

                <ButtonAppBar/>
                {/* Hero Section */}
                <section id={'hero'}>
                    <HeroSection/>
                </section>
                {/* Products Section */
                }
                <section
                    style={{
                        position: 'relative',
                        marginTop: '-8rem',
                        marginBottom: '-8rem',
                        zIndex: 0,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    id={'products'}
                >
                    <GridView/>
                </section>
                <section id={'why-shop'} style={{marginTop: '7rem', marginBottom: '7rem'}}>
                    <WhyShop/>
                </section>
                <section style={{margin: '1000px'}}></section>
                <section id={'about'}>
                    <About/>
                </section>
                <section id={'tos'}>
                </section>
            </ParallaxProvider>
        </GlobalProvider>
    );
};

export default App;