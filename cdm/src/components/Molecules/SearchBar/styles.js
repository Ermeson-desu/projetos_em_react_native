import styled from 'styled-components/native';
import { colors } from '../../../styles/colors'; 

export const SearchBarContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 20px;
`;

export const SearchBarStyle = styled.TextInput`
    flex: 1;
    height: 50px; /* Defina um height adequado */
    padding: 10px; /* Ajuste o padding se necessário */
    border: 1px solid #ccc;
    background-color: ${colors.white};
    border-radius: 25px;
`;
