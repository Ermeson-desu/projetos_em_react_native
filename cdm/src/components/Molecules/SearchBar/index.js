import React, { useState } from "react";
import { Text } from "../../Atoms";
import { SearchBarStyle, SearchBarContainer, SearchButton } from './styles';

export const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        if (search.trim()) {
            onSearch(search);
            setSearch("");
        }
    };

    return (
        <SearchBarContainer>
            <SearchBarStyle 
                placeholder="Buscar mangá" 
                onChangeText={setSearch}
                value={search}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
            />
        </SearchBarContainer>
    );
};