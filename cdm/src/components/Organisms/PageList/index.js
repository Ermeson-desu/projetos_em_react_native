import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ListContainer,MangaContainer } from "./styles";
import {PageManga, height_page} from '../../Molecules';
import {theme} from '../../../styles';


/**
 * Componente HomeList
 * Exibe uma lista de mangás com base nos dados fornecidos.
 * @param {Array} data - Array de dados dos mangás a serem exibidos.
 * @returns {JSX.Element} - Componente que exibe a lista de mangás.
 */
export const PageList = ({data}) =>{

    return(
        
        <ListContainer>

            <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) =>
                    <MangaContainer height={height_page}>
                        <PageManga item={item}/>
                    </MangaContainer> 
                }
           />

        </ListContainer>
    )
}