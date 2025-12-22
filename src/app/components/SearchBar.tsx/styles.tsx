'use client';

import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchBarContainer = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        height: '48px',
        borderRadius: '8px',
    },

    '& .MuiInputBase-input': {
        padding: '0',
        height: '100%',
    },
}));
