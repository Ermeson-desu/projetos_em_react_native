import React from "react";
import {BackgroundImage} from './styles'
import Backgroundapp from '../../../../assets/background.png';

const opacitys = {
    first: 1,
    second: 0.5
}


export const Background=({opacity})=>{
    return(
        <BackgroundImage 
            source={Backgroundapp} 
            opacity = {opacitys[opacity||'first']}
        />
    )
};