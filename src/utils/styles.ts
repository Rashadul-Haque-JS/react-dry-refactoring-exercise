 import styled from 'styled-components'
 import { Button } from '../types/buttons';
 
 export const Spinner = styled.div`
  border: 16px solid gray;
  border-top: 16px black solid;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;


export const StyledDiv = styled.div`
    background-color:#FFE81F;
    color:black;
    border: 0;
    border-radius: 5px; 
    cursor: pointer;
    margin:8px;
    padding:0;
    width:400px;
    height:200px;
    box-shadow:0px 0px 37px rgba(0, 0, 0, 0.03)
;

`


export const StyledButton = styled.button<Button>`
    background-color: ${(button)=>button.bgcolor};
    color:${(button)=>button.color} ;
    padding: 3px 8px;
    border: 0;
    border-radius: 5px; 
    font-size: 12px;
    cursor: pointer;
    margin:0 4px;
   

    &:hover {
        opacity: 0.8;
    }
`