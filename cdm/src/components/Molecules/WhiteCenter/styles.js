import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const ContainerCenter = styled.ScrollView`
    position: absolute;
    margin-left:${({theme})=>theme.metrics.px(19)}px ;
    margin-top: 23%;
    display: flex;
    flex-direction: column;
    background-color: ${colors.light_grey};
    width: 90.5%;
    height: ${({theme})=> theme.metrics.px(800)}px;
    border-radius:${({theme})=>theme.metrics.px(18)}px;
`;