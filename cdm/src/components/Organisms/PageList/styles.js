import styled from "styled-components/native";

export const ListContainer = styled.View`

    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`;

export const MangaContainer = styled.View`
    width: ${({width,theme})=>theme.metrics.px(width||412)}px;
    height:${({height,theme})=>theme.metrics.px(height)}px;
    align-items: center;
`;