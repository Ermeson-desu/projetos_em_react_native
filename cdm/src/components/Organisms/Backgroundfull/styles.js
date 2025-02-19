import styled from "styled-components/native";
import { theme } from "../../../styles/theme";


export const Backgroundfullcontainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({theme})=> theme.metrics.px(0)}px;
`;
