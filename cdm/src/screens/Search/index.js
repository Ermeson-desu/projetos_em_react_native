import React from 'react';
import { Container, Backgroundfull, SearchBar, BottomBar} from '../../components';
import { colors } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

export const Search = () => {
    const navigation = useNavigation(); 
    
    return(
        <Container align='center' justify='center'>
            <Backgroundfull>
                <SearchBar/>
            </Backgroundfull>
            <BottomBar navigation={navigation} />
        </Container>
    )
}