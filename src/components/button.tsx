import React from 'react';
import { Button } from '../types/buttons';
import { StyledButton } from '../utils/styles';

const ButtonComponent = ( {children, bgcolor,color, onClick, disabled=true }: Button) => (
    <StyledButton bgcolor={bgcolor} color={color} onClick={onClick} disabled={disabled}>{children}</StyledButton>
)

export default ButtonComponent;