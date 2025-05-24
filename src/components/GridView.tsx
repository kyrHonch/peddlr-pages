import {Urls, isMobile} from "../Data.ts";
import {Parallax} from "react-scroll-parallax";


export const GridView = () => {
    return (
        <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
            <div style={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 1,
                pointerEvents: 'none',
            }}/>

            <div
                style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '3rem',
                    justifyContent: 'center',
                    zIndex: 0,
                    height: '100vh',
                    maxHeight: isMobile() ? '40vh' : '60vh',
                    overflow: 'hidden'
                }}
            >
                {Urls.map((url, index) => (
                    <Parallax speed={index % 2 === 0 ? -10 : 10} key={index}>
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            maxHeight: '300px',
                            width: '100%',
                            maxWidth: '200px',
                        }}>
                            <img
                                src={url}
                                alt={`Pedal ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </Parallax>
                ))}
            </div>
        </div>
    )
}