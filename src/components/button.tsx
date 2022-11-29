import React from 'react';
import { Button } from '../types/buttons';
import { StyledButton } from '../utils/styles';

const ButtonComponent = ( {props}:{props: Button}) => (
    <StyledButton bgcolor={props.bgcolor} color={props.color} onClick={props.onClick}>{props.children}</StyledButton>
)

export default ButtonComponent;