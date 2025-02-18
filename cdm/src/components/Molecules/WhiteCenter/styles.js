import styled from "styled-components";

export const ContainerCenter = styled.View`
    position: absolute;
    margin-left:${({theme})=>theme.metrics.px(19)}px ;
    margin-top: 23%;
    display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    width: 90.5%;
    height: 90%;
    border-radius:${({theme})=>theme.metrics.px(9)}px;
`;