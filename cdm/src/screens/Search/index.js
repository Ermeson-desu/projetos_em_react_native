import React, { useState } from "react";
import { Alert } from 'react-native'; // Combine as importações
import { 
    Container, 
    Backgroundfull, 
    BottomBar, 
    SearchBar, 
    SearchList, 
    MangaList,
    Loading
} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { searchManga } from '../../services/Api/SearchManga'; 


export const Search = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState([])
    const navigation = useNavigation();



    const handleSearch = async (query) => {
        try {
            setLoading(true)
            const mangas = await searchManga(query);
            setSearch(mangas);
        } catch (error) {
            Alert.alert('Erro ao buscar mangá:', error.message);
        }
        finally{
            setLoading(false)
        }
    };

    return (
        <Container align='center' justify='center'>
            <Backgroundfull>
                <SearchBar onSearch={handleSearch} />
                {loading
                    ?(<Loading width={380} height={510}/>)
                    :(
                        <>
                        <SearchList contentContainerStyle={{ flexGrow: 1 }}>
                            <MangaList 
                                data={search} 
                                height="54.7%" 
                                width={120} 
                                horizontal={false}
                                onPress={(mangaId)=> navigation.navigate('Page',{mangaId})}
                            />
                        </SearchList>
                        </>
                    )}
            </Backgroundfull>
            <BottomBar navigation={navigation} />
        </Container>
    );
};
