import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

const App = () => {
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
                    padding: '0.75rem 3rem',
                    borderRadius: '999px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    display: 'flex',
                    gap: '3rem',
                    alignItems: 'center',
                    zIndex: 1000,
                    minWidth: '500px'
                }}
            >
                <span style={{fontWeight: 700, fontSize: '1.25rem', marginRight: '2rem', color: "#0283E5"}}>Peddlr</span>
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
                    paddingBottom: '4rem',
                    backgroundColor: '#fff',
                    color: '#111',
                    overflowX: 'hidden',
                }}
            >
                <Parallax speed={-10}>
                    <img
                        src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc5sxQDBJABUu6E8h0moi1SFxkt2cMayWZO7XT"
                        alt="Peddlr Logo"
                        style={{width: '300px', margin: '2rem 0'}}
                    />
                </Parallax>
                <Parallax speed={10}>
                    <h1
                        style={{
                            fontSize: '7rem',
                            fontWeight: 900,
                            letterSpacing: '-0.01em',
                            margin: 0,
                            lineHeight: 1.1,
                        }}
                    >
                        Peddlr.app
                    </h1></Parallax>
                <Parallax speed={5}>
                    <h3>The Marketplace for the FX-Obsessed<br/>
                        Launching soon. Join the movement. Trade gear. Support builders. Skip the middleman.
                        The marketplace where the pedal people and synth heads connect!</h3>
                </Parallax>
            </section>

            {/* Products Section */}
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
            >
              <div
                style={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(112, 66, 20, 0.3)',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              ></div>
              <div
                style={{
                  width: '100%',
                  maxWidth: '1400px',
                  display: 'flex',
                  gap: '4rem',
                  justifyContent: 'space-between',
                  zIndex: 0,
                }}
              >
                {(() => {
                  // const urls = [
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcVirm3nI0nZw82asXfNI9RFqlpmWjuvt165L0",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc2mCsi8adhvxCraLBe4nbkQcP68qW7wK3uZzd",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jceKkhZFPDx9O8qGQgJLr0j24dta5FUpRSVswf",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc0oB9CbGCBLwoZzx2vNkamerjFHQ85TERhVWy",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcmUJy5xMTpqlkDQxAzVvJEMUsGN0Cr2dmh9iy",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcnZZ3mA5IGuRUoK9gdzc0siM6BOmrhJFEtqIC",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcSSxYwjc5U9LRJWnBV1M83ZsoxpOHG0ziITPC",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcr0bkom9ZspltSDXCKH7ja1yYd039on5zvEFq",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcHTPoxjK9RP2c5w6khs8QjdnNezYgGTxi3DJE",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcgD5c18XyX3FJEhUDWOcRTPs59znVCIBw4mf6",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc2UwYkBdhvxCraLBe4nbkQcP68qW7wK3uZzdM",
                  //   "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcMlQvx44SnJ5KqtpPENlrmWx7cG2Sa1gof8Vs"
                  // ];
                    const urls = ['https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc0oVKAiGCBLwoZzx2vNkamerjFHQ85TERhVWy',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcUAJc84QuUhedAgTEkXc0pWRbQVDt6yHoGFv7',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcLW8tbs2yiN85SMU2nVBgtWeKaP0sA3YEOqxX',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcb4rqaOH1dJKfsXRxjMwlkZOAvBTuc9VHDEnt',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcHu8hkFK9RP2c5w6khs8QjdnNezYgGTxi3DJE',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcqNTztrCbZH0GkT31NMrnpDJViduftKjmzlUC',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcxEoLApkr8jcg3Z6BILMeaRFvohnyi9lGfXJ4',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcHYmZ0ZtK9RP2c5w6khs8QjdnNezYgGTxi3DJ',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcoRZCjdJST2hkD0wp9x4bO3GFLMaAt6grv5oP',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcKjavySy1RjWgfcsZqCAOb50DIyNTXH8uFaJz',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcrPZIBp9ZspltSDXCKH7ja1yYd039on5zvEFq',
                        'https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcHv3NpUK9RP2c5w6khs8QjdnNezYgGTxi3DJE',
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcVirm3nI0nZw82asXfNI9RFqlpmWjuvt165L0",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc2mCsi8adhvxCraLBe4nbkQcP68qW7wK3uZzd",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jceKkhZFPDx9O8qGQgJLr0j24dta5FUpRSVswf",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc0oB9CbGCBLwoZzx2vNkamerjFHQ85TERhVWy",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcmUJy5xMTpqlkDQxAzVvJEMUsGN0Cr2dmh9iy",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcnZZ3mA5IGuRUoK9gdzc0siM6BOmrhJFEtqIC",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcSSxYwjc5U9LRJWnBV1M83ZsoxpOHG0ziITPC",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcr0bkom9ZspltSDXCKH7ja1yYd039on5zvEFq",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcHTPoxjK9RP2c5w6khs8QjdnNezYgGTxi3DJE",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcgD5c18XyX3FJEhUDWOcRTPs59znVCIBw4mf6",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jc2UwYkBdhvxCraLBe4nbkQcP68qW7wK3uZzdM",
                        "https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcMlQvx44SnJ5KqtpPENlrmWx7cG2Sa1gof8Vs"
                    ];
                  return [[-3, 0], [8, 5], [-10, 2], [4, 3], [-6, 1], [9, 4]].map(([speed, colIndex]) => (
                    <div key={colIndex} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 0, overflow: 'hidden', maxHeight: '100vh'}}>
                      {[0, 1, 2, 3].map((i) => {
                        const index = colIndex * 4 + i;
                        return (
                          <Parallax speed={speed} key={index}>
                            <img
                              src={urls[index % urls.length]}
                              alt={`Pedal ${index + 1}`}
                              style={{width: '200px', height: '200px', objectFit: 'contain', borderRadius: '12px'}}
                            />
                          </Parallax>
                        );
                      })}
                    </div>
                  ));
                })()}
              </div>
            </section>
            <section style={{margin: "600px"}}></section>
        </ParallaxProvider>
    );
};

export default App;