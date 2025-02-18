import React from 'react';
import {LogoImage} from './styles'
import logoImage from '../../../../assets/logo_cmd.png';

const sizes = {
    small:135 ,
    large:293 
}

const positions = {
    frist: 0,
    second: 20
}

export const Logo =({size, position})=> {
    return(
        <LogoImage source={logoImage} 
            size={sizes[size||'large']} 
            marginLeft={positions[position||'frist']}
        />
    )   
};
