'use client';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonContainer = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    background: theme.palette.royalBlue,
    padding: '0px 16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48px',
    borderRadius: '8px',
    gap: '8px',

    '& .MuiSvgIcon-root': {
        color: 'white',
    },

    '& .MuiTypography-root': {
        color: 'white',
    },
}));
