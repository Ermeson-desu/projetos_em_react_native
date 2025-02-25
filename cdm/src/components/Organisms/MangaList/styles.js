import styled from "styled-components/native";

export const ListContainer = styled.View`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 20%;
`;

export const MangaContainer = styled.View`
    width: ${({width,theme})=>theme.metrics.px(width||130)}px;
    height:${({theme})=>theme.metrics.px(213)}px;
    align-items: center;
`;