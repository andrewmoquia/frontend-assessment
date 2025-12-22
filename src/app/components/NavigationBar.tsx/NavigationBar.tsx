'use client';

import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import CustomButton from '../Button/Button';
import SearchBar from '../SearchBar.tsx/SearchBar';

import { NavigationBarContainer } from './styles';

export type NavigationBarProps = {
    onClick: () => void;
};

const NavigationBar = ({ onClick = () => {} }: NavigationBarProps) => {
    return (
        <NavigationBarContainer>
            <Box className="nav-title-search-wrapper">
                <Typography variant="h1">Tasks</Typography>
                <SearchBar />
            </Box>
            <CustomButton onClick={onClick}>
                <AddIcon />
                <Typography variant="buttonText">Create Task</Typography>
            </CustomButton>
        </NavigationBarContainer>
    );
};

export default NavigationBar;
