import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    width: ${({theme})=>theme.metrics.px(100)}px;
    height: ${({theme})=>theme.metrics.px(157)}px;
    border-radius: ${({theme})=>theme.metrics.px(11)}px;
    overflow: hidden;
    margin-left:${({theme})=>theme.metrics.px(10)}px;
    margin-right:${({theme})=>theme.metrics.px(10)}px;
`;
export const CardImage = styled.Image`
    width:100%;
    height:100%;
`;