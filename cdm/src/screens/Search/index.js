import React from 'react';
import { Container, Backgroundfull, Text} from '../../components';
import { SearchBar } from '../../components/Molecules/SearchBar'; 
import { colors } from '../../styles/colors';

export const Search = () => {
    return(
        <Container align='center' justify='center'>
            <Backgroundfull screen={'Search'}/>
                <Text color={colors.dark_grey}>Mangá not found</Text>
            <SearchBar/>
        </Container>
    )
}