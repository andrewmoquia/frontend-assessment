'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavigationBarContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 80,
    borderBottom: `2px solid ${theme.palette.royalBlue}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',

    '& .nav-title-search-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px',
        gap: '8px',
        height: '48px',
    },
}));
