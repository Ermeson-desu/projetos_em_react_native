import react from "react";
import { Container,PageList, PageManga } from "../../components";

export const Fake_data = [
    {
        id: '1',
        image_url: "https://meo.comick.pictures/1-Ss0qR0UARif3r.jpg"
    },
    {
        id:'2',
        image_url:'https://meo.comick.pictures/2--CHl4HJgWR_gO.jpg'
    }
]

export const Page = () => {
    return(
        <Container>
            <PageList data={Fake_data}/>
        </Container>
    )
}
