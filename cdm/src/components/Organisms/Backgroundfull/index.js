import React from "react";
import {Logo} from '../../Atoms/Logo';
import {Background} from '../../Atoms';
import {Backgroundfullcontainer} from './styles';
import { WhiteCenter } from "../../Molecules";
import logo2 from '../../../../assets/sanins.png'

export const Backgroundfull = ({children})=>{
    return (
        <Backgroundfullcontainer>
            <Background opacity={'second'} />
            <WhiteCenter>
                {children}
            </WhiteCenter>
            <Logo size={'small'} position={'second'}/>
            <Logo size={'small'} position ={'third'} marginTop={34} source={logo2}/>
        </Backgroundfullcontainer>
    )
}
