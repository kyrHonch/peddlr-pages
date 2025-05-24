import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {useGlobalContext} from "../context/GlobalContext.tsx";

export const WhyShop = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const {isMobile} = useGlobalContext();
    const aos_mobile = isMobile ? "fade-up" : "fade-down";
    return (
        <div style={{ padding: '2rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Why Shop At Peddlr</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                <div data-aos="fade-up" style={{ background: '#fff', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcC3YLEtR91gNB7yr4ltIfEU6pSQWTKzRVDhHu" alt="Buy & sell gear easily" style={{ width: '100px', margin: '0 auto' }} />
                    <h3>Buy & sell gear easily</h3>
                    <p>Buying and selling gear is fast, easy, and built for musicians. List your pedals in minutes or find trusted gear without the hassle or high fees.</p>
                </div>
                <div data-aos={aos_mobile} style={{ background: '#fff', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcZCw69IWwA2ypmiusIcz9RbDKgn8CXlQehMF6" alt="Safe Community" style={{ width: '100px', margin: '0 auto' }} />
                    <h3>Safe Community of Musicians</h3>
                    <p>A trusted space for musicians, with verified users and reviewed listings to keep the community safe, respectful, and scam-free.</p>
                </div>
                <div data-aos="fade-up" style={{ background: '#fff', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <img src="https://nstpyv38l8.ufs.sh/f/xeiOjjdkr8jcrhKBHA9ZspltSDXCKH7ja1yYd039on5zvEFq" alt="Verified listings" style={{ width: '100px', margin: '0 auto' }} />
                    <h3>Verified listings</h3>
                    <p>Every listing is reviewed for accuracy and legitimacy, so you can shop with confidence and skip the sketchy deals.</p>
                </div>
            </div>
        </div>
    )
}