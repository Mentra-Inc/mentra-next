import { createTheme } from '@mui/material/styles'; 

const theme = createTheme({
    palette: {
        primary: {
            main: '#0d378b'
        },
        secondary: {
            main: '#1d5ad5'
        },
        background: {
            default: '#98c4fc'
        }
    },
    spacing: 4,
    typography: {
        h1: {
            fontSize: "3em",
            fontWeight: 900
        },
        h2: {
            fontSize: "2.5em",
            fontWeight: 600
        },
        subtitle1: {
            fontSize: "1.5em"
        },
        body1: {
            fontSize: "1.2em",
            opacity: 0.8
        }
    },
    custom: {
        sizes: {
            aboutUsImg: { width: 458, height: 371 },
            heroImg: { width: 494, height: 442 },
            logoImg: { width: 68, height: 50 },
            productCard: { maxWidth: 575 },
            aboutUsText: { maxWidth: 630 }
        }
    }
});

export default theme;