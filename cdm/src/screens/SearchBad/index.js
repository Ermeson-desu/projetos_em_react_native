import React from 'react';
import { Container, Backgroundfull} from '../../components';
import { SearchBar } from '../../components/Molecules/SearchBar'; 

export const SearchBad = () => {
    return(
        <Container align='center' justify='center'>
            <Backgroundfull screen={'SearchBad'}/>
            <SearchBar/>
        </Container>
    )
}