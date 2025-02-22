import React from "react";
import {Logo} from '../../Atoms/Logo';
import {Background} from '../../Atoms';
import {Backgroundfullcontainer} from './styles';
import { WhiteCenter } from "../../Molecules";

export const Backgroundfull = ({children})=>{
    return (
        <Backgroundfullcontainer>
            <Background opacity={'second'} />
            <WhiteCenter>
                {children}
            </WhiteCenter>
            <Logo size={'small'} position={'second'}/>
        </Backgroundfullcontainer>
    )
}
