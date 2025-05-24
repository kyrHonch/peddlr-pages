import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export const WhyShop = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos="zoom-in">
            <h2>Hello, I fade in when you scroll!</h2>
        </div>
    )

}