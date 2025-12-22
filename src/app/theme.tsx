'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        royalBlue: string;
        richBlack: string;
        white: string;
        iceBlue: string;
        mintGreen: string;
        coolGray: string;
    }
    interface PaletteOptions {
        royalBlue?: string;
        richBlack?: string;
        white?: string;
        iceBlue?: string;
        mintGreen?: string;
        coolGray?: string;
    }

    interface TypographyVariants {
        placeholder: React.CSSProperties;
        buttonText: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        placeholder?: React.CSSProperties;
        buttonText?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        placeholder: true;
        buttonText: true;
    }
}

export const theme = createTheme({
    palette: {
        royalBlue: '#3573F8',
        richBlack: '#18191E',
        white: '#FFFFFF',
        iceBlue: '#BFEFF3',
        mintGreen: '#D3FFDB',
        coolGray: '#777B91',
    },
    typography: {
        h1: {
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '24px',
        },
        h2: {
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
        },
        body1: {
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
        },
        placeholder: {
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
        },
        buttonText: {
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible': {
                        backgroundColor: '#BFEFF3',
                    },
                },
            },
        },
    },
});
