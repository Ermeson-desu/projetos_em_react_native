import React from "react";
import {Logo} from '../../Atoms/Logo';
import {Background} from '../../Atoms';
import {Backgroundfullcontainer} from './styles';

export const Backgroundfull = ()=>{
    return (
        <Backgroundfullcontainer>
            <Background opacity={'second'} />
            <Logo size={'small'} position={'second'}/>
        </Backgroundfullcontainer>
    )
}
