'use client';

import { Modal } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CreateUpdateModalContainer = styled(Modal)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',

    '& .modal-wrapper': {
        width: '400px',
        height: 'fit-content',
        background: 'white',
        borderRadius: '8px',
        padding: '16px 32px 32px 32px',
    },

    '& .MuiButtonBase-root': {
        marginTop: '16px',
    },
}));
