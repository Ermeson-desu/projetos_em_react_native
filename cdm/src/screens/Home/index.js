import React from "react";
import { Container, HomeList,Backgroundfull} from '../../components';

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

export const Home = () => {
    return(
        <Container align='center' justify='center'>
            <Backgroundfull/>
            <HomeList title={'Mangas'} data={FAKE_DATA_CHARACTERES}/>
        </Container>
    )
}