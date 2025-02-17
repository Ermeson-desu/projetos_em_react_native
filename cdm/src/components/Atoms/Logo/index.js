import React from 'react';
import {LogoImage} from './styles'
import logoImage from '../../../../assets/logo_cmd.png';

const sizes = {
    small:135 ,
    large:293 

}

export const Logo =({size })=> {
    return(
        <LogoImage source={logoImage} size={sizes[size||'large']} />
    )   
};
