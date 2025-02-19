import styled from "styled-components/native";

export const Backgroundfullcontainer = styled.ScrollView`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({size, theme})=>theme.metrics.px(size)}px;
`;
