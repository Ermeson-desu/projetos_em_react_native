import styled from 'styled-components/native';
import { colors } from '../../../styles/colors'; 

export const SearchBarContainer = styled.View`
    position: absolute;
    top: ${({theme})=>theme.metrics.px(30)}px;
    left:  ${({theme})=>theme.metrics.px(19)}px;
    width: 90%;
    height: 50px;
`;

export const SearchBarStyle = styled.TextInput`
    width: 100%;
    height: 100%;
    border-radius: ${({theme})=>theme.metrics.px(45)}px;
    padding: ${({theme})=>theme.metrics.px(15)}px;
    background-color: ${colors.white};
`;


