import React, { useEffect, useState } from "react";
import { Container, HomeList,Backgroundfull} from '../../components';
import { fetchMangas } from "../../services/Api/SearchService";
//Se não entender, não mexa 

/**
 * Tela Home
 * Exibe uma lista de mangás recomendados ou mais recentes.
 * @returns - Tela de início com uma lista de mangás.
 */
export const Home = () => {
    const [manga, setManga] = useState([])

    useEffect(()=>{
        const loadMangas = async () =>{
            const fetchedMangas = await fetchMangas()
            setManga(fetchedMangas)
        }

        loadMangas()
    }, [])

    return(
        <Container align='center' justify='center'>
            <Backgroundfull>
                <HomeList title={'Mangás recentes'} data={manga}/>
                
            </Backgroundfull>
        </Container>
    )
}