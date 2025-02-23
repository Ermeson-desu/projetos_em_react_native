import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons"; 

export const StyledIcons = styled(Ionicons)`
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color};
`;