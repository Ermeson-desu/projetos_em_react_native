import styled from "styled-components/native";
import { theme } from "../../../styles";

export const StyledContainerButtons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 8%;
    width: 100%;
    background-color: ${theme.colors.dark_gray};
    border-radius: 15px 15px 0 0;
    position: absolute;
    top: 92%
`;