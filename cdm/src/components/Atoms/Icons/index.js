import React from "react";
import { StyledIcons, StyledContainer } from './styles'

export const Icons = ({name='timer', size=24, color='red'}) => {
    return (
        <StyledContainer>
            <StyledIcons name={name} size={size} color={color}/>
            <StyledIcons name={name} size={size} color={color}/> 
        </StyledContainer>
    )
}