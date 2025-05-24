import {Parallax, ParallaxProvider} from 'react-scroll-parallax';
import {useRef, useEffect, useState} from 'react';
import {GridView} from "./GridView.tsx";

const App = () => {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const [showTitleInNavbar, setShowTitleInNavbar] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowTitleInNavbar(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5,
            }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            if (headingRef.current) {
                observer.unobserve(headingRef.current);
            }
        };
    }, []);


    return (
        <ParallaxProvider>
            {/* Navbar */}
            <header
                style={{
                    position: 'fixed',
                    top: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#fff',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '999px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    zIndex: 1000,
                    width: '90%',
                    maxWidth: '600px',
                    fontSize: 'clamp(1rem, 4vw, 1.125rem)'
                }}
            >
                <span
                    style={{
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        color: "#0283E5",
                        marginRight: '2rem',
                        visibility: showTitleInNavbar ? 'visible' : 'hidden',
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: showTitleInNavbar ? 1 : 0,
                        width: '80px',
                        display: 'inline-block',
                    }}
                >
                  Peddlr
                </span>
                <a href="#" style={{fontWeight: 600, textDecoration: 'none', color: '#111'}}>Products</a>
                <a href="#" style={{fontWeight: 600, textDecoration: 'none', color: '#111'}}>Why Shop</a>
                <a href="#" style={{fontWeight: 600, textDecoration: 'none', color: '#111'}}>About</a>
            </header>

            {/* Hero Section */}
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: '100vh',
                    padding: '2rem 1rem',
                    backgroundColor: '#fff',
                    color: '#111',
                    overflowX: 'hidden',
                }}
                id={'hero'}
            >
                <h1
                    ref={headingRef}
                    style={{
                        fontSize: 'clamp(2rem, 10vw, 7rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.01em',
                        margin: 0,
                        lineHeight: 1.1,
                        wordBreak: 'break-word',
                        textAlign: 'center',
                        // textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                        color: '#0283E5',
                        marginBottom: '2rem'
                    }}
                >
                    Peddlr
                </h1>
                <Parallax speed={5}>
                    <img
                        src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc5sxQDBJABUu6E8h0moi1SFxkt2cMayWZO7XT"
                        alt="Peddlr Logo"
                        style={{width: '250px', maxWidth: '100%', height: 'auto'}}
                    />
                </Parallax>
                <Parallax speed={-5}>
                    <h3
                        style={{
                            maxWidth: "600px",
                            margin: 0,
                            padding: "1rem",
                            fontSize: '1.125rem',
                            lineHeight: 1.5,
                            fontWeight: 600,
                            textAlign: 'center',
                            paddingTop: '1rem',
                        }}
                    >
                        The Marketplace for the FX-Obsessed<br/>
                        Launching soon. Join the movement. Trade gear. Support builders. Skip the middleman.
                        The marketplace where the pedal people and synth heads connect!
                    </h3>
                </Parallax>

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
                    // padding: '6rem 2rem',
                    //   height: '100vh',
                }}
                id={'products'}
            >
                <GridView/>

                {/*<div*/}
                {/*    style={{*/}
                {/*        content: '""',*/}
                {/*        position: 'absolute',*/}
                {/*        top: 0,*/}
                {/*        left: 0,*/}
                {/*        right: 0,*/}
                {/*        bottom: 0,*/}
                {/*        backgroundColor: 'rgba(0, 0, 0, 0.4)',*/}
                {/*        zIndex: 1,*/}
                {/*        pointerEvents: 'none',*/}
                {/*    }}*/}
                {/*></div>*/}
                {/*<div*/}
                {/*    style={{*/}
                {/*        width: '100%',*/}
                {/*        maxWidth: '1400px',*/}
                {/*        display: 'flex',*/}
                {/*        flexWrap: 'wrap',*/}
                {/*        gap: '2rem',*/}
                {/*        justifyContent: 'center',*/}
                {/*        zIndex: 0,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {(() => {*/}

                {/*        return [[-10, 0], [10, 2], [-10, 1], [10, 3]].map(([speed, colIndex]) => (*/}
                {/*            <div key={colIndex} style={{*/}
                {/*                display: 'grid',*/}
                {/*                // flexDirection: 'column',*/}
                {/*                gridTemplateRows: '1fr 1fr 1fr',*/}
                {/*                gap: '1.5rem',*/}
                {/*                zIndex: 0,*/}
                {/*                overflow: 'hidden',*/}
                {/*                maxHeight: '600px',*/}
                {/*                width: '100%',*/}
                {/*                maxWidth: '200px'*/}
                {/*            }}>*/}
                {/*                {[0, 1, 2].map((i) => {*/}
                {/*                    const index = colIndex * 4 + i;*/}
                {/*                    return (*/}
                {/*                        <Parallax speed={speed + i} key={index}>*/}
                {/*                            <div*/}
                {/*                                // backgroundImage={urls[index % urls.length]}*/}
                {/*                                // alt={`Pedal ${index + 1}`}*/}
                {/*                                style={{*/}
                {/*                                    backgroundImage: `url(${Urls[index % Urls.length]})`,*/}
                {/*                                    width: '100%',*/}
                {/*                                    height: '100%',*/}
                {/*                                    objectFit: 'contain',*/}
                {/*                                }}*/}
                {/*                            ></div>*/}
                {/*                        </Parallax>*/}
                {/*                    );*/}
                {/*                })}*/}
                {/*            </div>*/}
                {/*        ));*/}
                {/*    })()}*/}
                {/*</div>*/}
            </section>
            <section style={{margin: "600px"}}></section>
        </ParallaxProvider>
    )
        ;
};

export default App;