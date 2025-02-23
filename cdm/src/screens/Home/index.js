import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Container, MangaList,HomeList,Backgroundfull} from '../../components';
import { fetchMangas } from "../../services/Api/RecentManga";
import { fetchMostVieweds} from '../../services/Api/MostViewed';
import { fetchIndications } from "../../services/Api/Indications";
import { fetchRomance } from "../../services/Api/Romance";
import { fetchIsekais } from "../../services/Api/Isekais";
import { BottomBar } from "../../components";
import { useNavigation } from "@react-navigation/native";
//Se não entender, não mexa 

/**
 * Tela Home
 * Exibe uma lista de mangás recomendados ou mais recentes.
 * @returns - Tela de início com uma lista de mangás.
 */
export const Home = () => {
    const navigation = useNavigation()
    const [mangaRecent, setMangaRecent] = useState([])
    const [mostViewed, setMostViewed] = useState([])
    const [indications, setIndications] = useState([])
    const [romance, setRomance] = useState([])
    const [isekais, setIsekais] = useState([])

    useEffect(()=>{
        const loadIsekais = async () => {
            const fetchedIsekais = await fetchIsekais()
            setIsekais(fetchedIsekais)
        }
        const loadMangasRecents = async () =>{
            const fetchedMangasRecents = await fetchMangas()
            setMangaRecent(fetchedMangasRecents)
        }
        const loadMostVieweds = async ()=>{
            const fetchedMostViewed = await fetchMostVieweds()
            setMostViewed(fetchedMostViewed)
        }
        const loadIndications = async () =>{
            const fetchedIndicatio = await fetchIndications()
            setIndications(fetchedIndicatio)
        }
        const loadRomance = async () =>{
            const fetchedRomance = await fetchRomance()
            setRomance(fetchedRomance)
        }
        loadRomance()
        loadMangasRecents()
        loadMostVieweds()
        loadIndications()
        loadIsekais()
    }, [])

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>

            <Container align='center' justify='center'>
                <Backgroundfull>
                    <HomeList contentContainerStyle={{ flexGrow: 1 ,paddingBottom: 15}}>
                        <MangaList title={'Mangás recentes'} data={mangaRecent}/>
                        <MangaList title={'Mais vistos'} data={mostViewed}/>
                        <MangaList title={'Indicações'} data={indications}/>
                        <MangaList title={'Romances'} data={romance}/>
                        <MangaList title={'Isekais'} data={isekais}/>
                    </HomeList>
                </Backgroundfull>
                <BottomBar navigation={navigation}/>
            </Container>

        </KeyboardAvoidingView>
    )
}