import React from "react";
import { Container, HomeList,Backgroundfull} from '../../components';

//Se não entender, não mexa 

// Dados fictícios para exibição
const FAKE_DATA_CHARACTERES =[
    {
        id: 0,
        image_url: 
            'https://cdn.kobo.com/book-images/f8ca17a1-666d-4351-aa99-9f4f3e9490fe/1200/1200/False/martial-peak-volume-4.jpg',
    },
    {
        id: 1,
        image_url: 
            'https://m.media-amazon.com/images/I/716EGgqzyOL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id:2,
        image_url:
            'https://m.media-amazon.com/images/I/71bELfIWTDL._AC_UF1000,1000_QL80_.jpg',
    }
]

/**
 * Tela Home
 * Exibe uma lista de mangás recomendados ou mais recentes.
 * @returns {JSX.Element} - Tela de início com uma lista de mangás.
 */
export const Home = () => {
    return(
        <Container align='center' justify='center'>
            <Backgroundfull screen={'Home'}/>
            <HomeList title={'Mangas'} data={FAKE_DATA_CHARACTERES}/>
        </Container>
    )
}