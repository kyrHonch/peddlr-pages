import {ParallaxProvider} from 'react-scroll-parallax';
import {GridView} from "./components/GridView.tsx";
import {About} from "./About.tsx";
import {WhyShop} from "./components/WhyShop.tsx";
import {GlobalProvider} from "./context/GlobalContext.tsx";
import ButtonAppBar from "./components/ButtonAppBar.tsx";
import {HeroSection} from "./components/HeroSection.tsx";
import {Tos} from "./components/Tos.tsx";

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
                        zIndex: 0,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    id={'products'}
                >
                    <GridView/>
                </section>
                <section id={'why-shop'} >
                    <WhyShop/>
                </section>
                <section id={'about'}>
                    <About/>
                </section>
                <section id={'tos'}>
                    <Tos/>
                </section>

            </ParallaxProvider>
        </GlobalProvider>
    );
};

export default App;