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
export const MangaList = ({
    data,
    title, 
    height, 
    width,
    horizontal=true, 
    numColumns='?1 :3',

}) =>{
    return(
        <ListContainer style={{ height}}>
            <Text color={theme.colors.dark_gray} marginLeft={16} marginBottom={13}>{title}</Text>
            <FlatList
                data = {data}
                renderItem = {({item}) =>
                    <MangaContainer width={width}>
                        <CardsManga item={item}/>
                        <Text size={15} color={theme.colors.blue} marginLeft={15} marginBottom={0}>{item.title}</Text>
                    </MangaContainer>
                }
                keyExtractor = {(item)=> item.id}
                horizontal={horizontal}
                numColumns={horizontal ? 1 : 3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: theme.metrics.px(3),
                    paddingLeft: theme.metrics.px(7)
                }}
            />
        </ListContainer>
    )
}