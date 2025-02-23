import React, { useEffect, useState } from "react";
import { Container, MangaList,HomeList,Backgroundfull} from '../../components';
import { fetchMangas } from "../../services/Api/RecentManga";
import {fetchMostViewdes as fetchMostVieweds} from '../../services/Api/MostViewed'
//Se não entender, não mexa 

/**
 * Tela Home
 * Exibe uma lista de mangás recomendados ou mais recentes.
 * @returns - Tela de início com uma lista de mangás.
 */
export const Home = () => {
    const [mangaRecent, setMangaRecent] = useState([])
    const [mostViewed, setMostViewed] = useState([])

    useEffect(()=>{
        const loadMangasRecents = async () =>{
            const fetchedMangasRecents = await fetchMangas()
            setMangaRecent(fetchedMangasRecents)
        }
        const loadMostVieweds = async ()=>{
            const fetchedMostViewed = await fetchMostVieweds()
            setMostViewed(fetchedMostViewed)
        }
        loadMangasRecents()
        loadMostVieweds()
    }, [])

    return(
        <Container align='center' justify='center'>
            <Backgroundfull>
                <HomeList contentContainerStyle={{ flexGrow: 1 ,paddingBottom: 15}}>
                    <MangaList title={'Mangás recentes'} data={mangaRecent}/>
                    <MangaList title={'Mais vistos'} data={mostViewed}/>
                    <MangaList title={'Indicações'} data={mangaRecent}/>
                    <MangaList title={'Romances'} data={mangaRecent}/>
                    <MangaList title={'Isekais'} data={mangaRecent}/>
                </HomeList>
            </Backgroundfull>
        </Container>
    )
}