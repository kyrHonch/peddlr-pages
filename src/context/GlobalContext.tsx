import {createContext, useContext, useState, useEffect, type ReactNode} from 'react';

interface GlobalContextType {
    isMobile: boolean;
}

const defaultContext: GlobalContextType = {
    isMobile: false
};

export const GlobalContext = createContext<GlobalContextType>(defaultContext);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({children}: GlobalProviderProps) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlobalContext.Provider value={{isMobile}}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook for using the global context
export const useGlobalContext = () => useContext(GlobalContext);