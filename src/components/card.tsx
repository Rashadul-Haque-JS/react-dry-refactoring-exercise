import React from 'react';
import {Character} from '../types/characterType';
import {StyledDiv} from '../utils/styles'

const CardComponent = ({props}: {props:Character}) => (
 
   <StyledDiv>
        <div className='card-header bg-dark text-light text-center pb-2  mb-2'>
            {props.name}
        </div>
        <ul>
        <li>Height: {props.height}</li>
        <li>Mass: {props.mass}</li>
        <li>Birth: {props.birth_year}</li>
        <li>Eye-color: {props.eye_color}</li>
        <li>Gender: {props.gender}</li>
        <li>Skin-color: {props.skin_color}</li>
        </ul>
    
    </StyledDiv>
)

export default CardComponent;