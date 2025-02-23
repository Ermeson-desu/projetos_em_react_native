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
    width: ${({theme})=>theme.metrics.px(130)}px;
    height:${({theme})=>theme.metrics.px(205)}px;
    align-items: center;
`;