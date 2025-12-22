'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TaskCardContainerProps {
    check?: boolean;
}

export const TaskCardContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'check',
})<TaskCardContainerProps>(({ theme, check = false }) => ({
    borderRadius: '8px',
    padding: '16px',
    minHeight: 'fit-content',
    background: check ? theme.palette.mintGreen : theme.palette.iceBlue,
    transition: 'background-color 0.25s ease',

    '& .header-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'start',
        padding: '0px',
        gap: '8px',
        height: '48px',
        textAlign: 'start',
        width: '100%',

        '& .MuiTypography-h2': {
            maxHeight: '48px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    },

    '& .description-wrapper': {
        gap: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        width: '100%',
        height: 'auto',
        minHeight: '133px',
    },

    '& .hover-icons-wrapper': {
        width: '100%',
        gap: '8px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0px',
        '& .icon-button': {
            height: '24px',
            padding: 0,
            '& .icon': {
                display: 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease, color 0.25s ease',
            },
        },
    },

    '&: hover': {
        background: theme.palette.royalBlue,

        '& .MuiSvgIcon-root, .MuiTypography-root': {
            color: theme.palette.white,
        },

        '& .hover-icons-wrapper': {
            '& .icon-button': {
                '& .icon': {
                    display: 'block',
                    color: theme.palette.white,
                    transition: 'opacity 0.2s ease, transform 0.2s ease, color 0.25s ease',

                    '&:hover': {
                        color: theme.palette.richBlack,
                    },
                },
            },
        },
    },

    '& .MuiCheckbox-root': {
        width: '24px',
        height: '24px',
    },

    '& .MuiSvgIcon-root': {
        color: theme.palette.richBlack,
    },

    '& .MuiSvgIcon-root, & .MuiTypography-root': {
        transition: 'color 0.25s ease',
    },

    '& .MuiTypography-body1': {
        textDecoration: check ? 'line-through' : 'none',
        transition: 'color 0.25s ease, text-decoration 0.25s ease',
    },
}));
