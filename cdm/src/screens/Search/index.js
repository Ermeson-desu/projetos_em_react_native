import React, { useState } from "react";
import { FlatList, Text, Alert } from 'react-native'; // Combine as importações
import { Container, Backgroundfull, BottomBar, SearchBar } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { searchManga } from '../../services/Api/SearchManga'; 


export const Search = () => {
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    const handleSearch = async (query) => {
        try {
            const mangas = await searchManga(query);
            setData(mangas);
        } catch (error) {
            Alert.alert('Erro ao buscar mangá:', error.message);
        }
    };

    return (
        <Container align='center' justify='center'>
            <Backgroundfull>
                <SearchBar onSearch={handleSearch} />
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()} // Define uma chave única para cada item
                    renderItem={({ item }) => (
                        <Text>{item.title}</Text> // Exibe o título do mangá
                    )}
                />
            </Backgroundfull>
            <BottomBar navigation={navigation} />
        </Container>
    );
};
