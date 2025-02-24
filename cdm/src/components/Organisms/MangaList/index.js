import React from "react";
import { FlatList } from "react-native";
import { Text } from "../../Atoms";
import {CardsManga} from '../../Molecules';
import { ListContainer,MangaContainer } from "./styles"; 
import {theme} from '../../../styles';


/**
 * Componente HomeList
 * Exibe uma lista de mangás com base nos dados fornecidos.
 * @param {string} title - Título da lista de mangás.
 * @param {Array} data - Array de dados dos mangás a serem exibidos.
 * @returns {JSX.Element} - Componente que exibe a lista de mangás.
 */
export const MangaList = ({data,title, height='20%'}) =>{
    return(
        <ListContainer style={{ height }}>
            <Text color={theme.colors.dark_gray} marginLeft={16} marginBottom={13}>{title}</Text>
            <FlatList
                horizontal
                data = {data}
                renderItem = {({item}) =>
                    <MangaContainer>
                        <CardsManga item={item}/>
                        <Text size={15} color={theme.colors.blue} marginLeft={15} marginBottom={0}>{item.title}</Text>
                    </MangaContainer>
                }
                keyExtractor = {(item)=> item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: theme.metrics.px(3),
                    paddingLeft: theme.metrics.px(7)
                }}
            />
        </ListContainer>
    )
}