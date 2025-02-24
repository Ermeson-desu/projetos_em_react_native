import React, { useState } from "react";
import { FlatList, Text, Alert } from 'react-native'; // Combine as importações
import { Container, Backgroundfull, BottomBar, SearchBar, HomeList, MangaList } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { searchManga } from '../../services/Api/SearchManga'; 


export const Search = () => {
    const [search, setSearch] = useState([])
    const navigation = useNavigation();

    const handleSearch = async (query) => {
        try {
            const mangas = await searchManga(query);
            setSearch(mangas);
        } catch (error) {
            Alert.alert('Erro ao buscar mangá:', error.message);
        }
    };

    return (
        <Container align='center' justify='center'>
            <Backgroundfull>
                <SearchBar onSearch={handleSearch} />
                <HomeList contentContainerStyle={{ flexGrow: 1 }}>
                    <MangaList data={search} height="52%" />
                </HomeList>
            </Backgroundfull>
            <BottomBar navigation={navigation} />
        </Container>
    );
};
