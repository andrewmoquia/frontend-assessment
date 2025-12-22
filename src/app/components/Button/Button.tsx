'use client';

import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';

import { ButtonContainer } from './styles';

interface CustomButtonProps extends ButtonProps {
    children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
    return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default CustomButton;
