import React from 'react';
import { Container, Backgroundfull, Text, Icons, SearchBar, IconsButton} from '../../components';
import { colors } from '../../styles/colors';
 

export const Search = () => {
    return(
        <Container align='center' justify='center'>
            <Backgroundfull>
                <SearchBar/>
                <IconsButton name={'home'} size={25} color={'blue'}/>
            </Backgroundfull>
        </Container>
    )
}