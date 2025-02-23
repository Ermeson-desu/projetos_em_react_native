import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const ContainerCenter = styled.View`
    position: absolute;
    margin-left:${({theme})=>theme.metrics.px(19)}px ;
    margin-top: 23%;
    display: flex;
    flex-direction: column;
    background-color: ${colors.light_gray};
    width: 90.5%;
    height: ${({theme})=> theme.metrics.px(795)}px;
    border-radius:${({theme})=>theme.metrics.px(18)}px;
`;