'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomeContainer = styled(Box)(() => ({
    width: '100%',

    '& .task-card-container': {
        width: '100%',
        height: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        padding: '16px',
    },

    '@media (min-width: 900px)': {
        '& .task-card-container': {
            padding: '80px',
        },
    },
}));
