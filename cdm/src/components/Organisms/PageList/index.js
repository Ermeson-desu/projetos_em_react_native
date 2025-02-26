import React, { useEffect, useState } from "react";
import { FlatList} from "react-native";
import { ListContainer,MangaContainer } from "./styles";
import {PageManga, height_page,width_page} from '../../Molecules';
import { fetchChapters,fetchPages} from "../../../services/Api/Chapter";
import { useRoute } from "@react-navigation/native";
import { Text , Loading} from "../../../components";



/**
 * Componente HomeList
 * Exibe uma lista de mangás com base nos dados fornecidos.
 * @param {Array} data - Array de dados dos mangás a serem exibidos.
 * @returns {JSX.Element} - Componente que exibe a lista de mangás.
 */
export const PageList = () =>{
    const routes = useRoute()
    const {mangaId} = routes.params
    
    const [pages,setPages] = useState()

    useEffect(()=>{

        const loadPages = async ()=>{
            const chapter = await fetchChapters(mangaId)
            if(chapter && chapter.length > 0){
                const firstChapterId = chapter[0].id
                const fetchedPages = await fetchPages(firstChapterId)
                setPages(fetchedPages)
            }
        }
        loadPages()
    }, [mangaId])
    
    if (pages == null) return <Loading/>

    return(
        
        <ListContainer>

            <FlatList
            data={pages}
            keyExtractor={(item,index)=>`${item}-${index}`}
            renderItem={({item}) =>
                    <MangaContainer height={height_page} width={width_page}>
                        <PageManga item={item}/>
                    </MangaContainer> 
                }
           />

        </ListContainer>
    )
}