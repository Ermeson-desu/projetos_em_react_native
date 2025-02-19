import styled from "styled-components";

export const ContainerCenter = styled.View`
    position: absolute;
    margin-left:${({theme})=>theme.metrics.px(19)}px ;
    margin-top: 23%;
    display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    width: 90.5%;
    height: ${({theme})=> theme.metrics.px(800)}px;
    border-radius:${({theme})=>theme.metrics.px(18)}px;
`;