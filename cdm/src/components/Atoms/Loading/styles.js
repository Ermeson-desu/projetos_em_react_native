import styled from "styled-components";

export const LoadingStyle = styled.View`
    background-color: #ffffff00;
    display: flex;
    justify-content: center;
    height: ${({theme,height})=>theme.metrics.px(height||840)}px;
    width: ${({theme,width})=>theme.metrics.px(width||400)}px;
`;