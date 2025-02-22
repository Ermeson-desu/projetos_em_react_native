import styled from "styled-components/native";
import { theme } from "../../../styles";

// Define o estilo para o texto utilizando Styled Components
export const CustomText = styled.Text`
    font-size: ${({size,theme})=>theme.metrics.px(size)||theme.metrics.px(24)}px;
    color: ${({color,theme})=> color||theme.colors.black};
    margin-top:  ${({marginTop,theme})=>theme.metrics.px(marginTop) || theme.metrics.px(12)}px;
    margin-Left: ${({marginLeft,theme})=>theme.metrics.px(marginLeft)||theme.metrics.px(0)}px;
    margin-Bottom:${({marginBotton,theme})=>theme.metrics.px(marginBotton)||theme.metrics.px(0)}px;
    font-family: 'JotiOne_400Regular';
`;