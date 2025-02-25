import styled from "styled-components";

export const SearchList = styled.View`
    flex: 1;
    width: 100%;
    padding-bottom:200px;
    margin-bottom:${({theme})=>theme.metrics.px(-200)}%;
    margin-top:${({theme})=>theme.metrics.px(-60)}px
`;