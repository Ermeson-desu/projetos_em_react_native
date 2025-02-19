import React from "react";
import {Logo} from '../../Atoms/Logo';
import {Background} from '../../Atoms';
import {Backgroundfullcontainer} from './styles';
import { WhiteCenter } from "../../Molecules";
import { SearchBad } from "../../../screens";

const screens = {
    Home: 0,
    SearchBad: 891
}

export const Backgroundfull = ({screen})=>{
    return (
        <Backgroundfullcontainer size={screens[screen||'SearchBad']}>
            <Background opacity={'second'} />
            <WhiteCenter/>
            <Logo size={'small'} position={'second'}/>
        </Backgroundfullcontainer>
    )
}
