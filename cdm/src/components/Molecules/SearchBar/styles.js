import styled from 'styled-components/native';
import { colors } from '../../../styles/colors'; 

export const SearchBarContainer = styled.ScrollView`
    position: absolute;
    top: ${({theme})=>theme.metrics.px(120)}px;
    left:  ${({theme})=>theme.metrics.px(28)}px;
    width: 100%;
    height: 50%;
`;

export const SearchBarStyle = styled.TextInput`
    width: 85%;
    height: 100%;
    border-radius: ${({theme})=>theme.metrics.px(45)}px;
    padding: ${({theme})=>theme.metrics.px(15)}px;
    background-color: ${colors.white};
`;
