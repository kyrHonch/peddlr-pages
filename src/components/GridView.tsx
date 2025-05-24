import { Box, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Parallax } from "react-scroll-parallax";
import { Urls} from "../Data.ts";


const GridContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
        maxHeight: '30vh',
    },
    [theme.breakpoints.up('sm')]: {
        maxHeight: '60vh',
    },
}));

const Overlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
    pointerEvents: 'none',
});

const ColumnsContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 0,
    height: '150%',
    overflow: 'hidden',
    
    position: 'absolute',
    top: "-100px",
    padding: theme.spacing(1),
    gap: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        gap: theme.spacing(1.5),
        padding: theme.spacing(1.5),
    },
    [theme.breakpoints.up('md')]: {
        gap: theme.spacing(1.5),
        padding: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
        gap: theme.spacing(2),
        padding: theme.spacing(2.5),
    },
}));

const Column = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        gap: theme.spacing(1.5),
    },
    [theme.breakpoints.up('lg')]: {
        gap: theme.spacing(2),
    },
}));


const StyledImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.3s ease',
    filter: 'brightness(0.9) contrast(1.1)',
    '&:hover': {
        filter: 'brightness(1) contrast(1.2)',
    },
}));


interface ColumnItem {
    url: string;
    originalIndex: number;
}

export const GridView = () => {
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    const isTabletView = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    
    const getColumnCount = () => {
        if (isMobileView) return 4;
        return 6; 
    };

    
    const distributeIntoColumns = () => {
        const columnCount = getColumnCount();
        const columns: ColumnItem[][] = Array.from({ length: columnCount }, () => []);

        Urls.forEach((url, index) => {
            const columnIndex = index % columnCount;
            columns[columnIndex].push({ url, originalIndex: index });
        });

        return columns;
    };

    const getParallaxSpeed = (index: number) => {
        const baseSpeed = index % 2 === 0 ? -20 : 20;

        if (isMobileView) {
            return baseSpeed * 0.3; 
        } else if (isTabletView) {
            return baseSpeed * 0.6; 
        }
        return baseSpeed; 
    };

    const columns = distributeIntoColumns();

    return (
        <GridContainer>
            <Overlay />
            <ColumnsContainer>
                {columns.map((columnItems, columnIndex) => (
                    <Parallax
                        key={columnIndex}
                        speed={getParallaxSpeed(columnIndex)}
                    >
                        <Column>
                            {columnItems.map(({ url, originalIndex }) => (
                                    <StyledImage
                                        src={url}
                                        alt={`Pedal ${originalIndex + 1}`}
                                        loading="lazy"
                                    />

                            ))}
                        </Column>
                    </Parallax>
                ))}
            </ColumnsContainer>
        </GridContainer>
    );
};