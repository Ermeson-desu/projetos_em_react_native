import react from "react";
import { Container,PageList, PageManga } from "../../components";


export const Fake_data = [
    {
        id: '1',
        image_url: "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/11/Solo_leveling_2_excerto_BR-2.jpg?resize=696%2C995&ssl=1"
    },
    {
        id:'2',
        image_url:'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/11/Solo_leveling_2_excerto_BR-3.jpg?resize=696%2C995&ssl=1'
    }
]

export const Page = () => {
    return(
        <Container>
            <PageList data={Fake_data}/>
        </Container>
    )
}
