import React from "react";
import { SearchBarStyle, SearchBarContainer } from './styles';
import { Text } from "react"; 
import { colors } from "../../../styles/colors";

export const SearchBar = () =>{
    return(
        <SearchBarContainer>
            <SearchBarStyle placeholder="Buscar mangá"/>
        </SearchBarContainer>
    )
}