import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons"; 

export const StyledContainer = styled.ScrollView`
    width: ${({theme}) => theme.metrics.px(100)}px;
    height: 100%;
`;

export const StyledIcons = styled(Ionicons)`
    font-size: ${(theme) => theme.size}px;
    color: ${(colors) => colors.color};
`;