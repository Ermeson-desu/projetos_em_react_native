import React, { useState } from "react";
import { Alert } from 'react-native'; // Combine as importações
import { 
    Container, 
    Backgroundfull, 
    BottomBar, 
    SearchBar, 
    SearchList, 
    MangaList 
} from '../../components';
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
                <SearchList contentContainerStyle={{ flexGrow: 1 }}>
                    <MangaList data={search} height="54.7%" width={120} horizontal={false}/>
                </SearchList>
            </Backgroundfull>
            <BottomBar navigation={navigation} />
        </Container>
    );
};
