import styled from "styled-components";

export const HomeList = styled.ScrollView`
    flex: 1;
    width: 100%;
    margin-bottom:${({theme})=>theme.metrics.px(70)}px;
    padding-bottom: ${({theme})=>theme.metrics.px(15)}px;
`;