'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import { theme } from './theme';
import { store } from './redux/store';

export const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </Provider>
    );
};
