import React from "react";
import { FlatList } from "react-native";
import { Text } from "../../Atoms";
import {CardsManga} from '../../Molecules';
import { ListContainer } from "./styles"; 
import {theme} from '../../../styles/theme';


/**
 * Componente HomeList
 * Exibe uma lista de mangás com base nos dados fornecidos.
 * @param {string} title - Título da lista de mangás.
 * @param {Array} data - Array de dados dos mangás a serem exibidos.
 * @returns {JSX.Element} - Componente que exibe a lista de mangás.
 */
export const HomeList = ({data,title}) =>{
    return(
        <ListContainer>
            <Text>{title}</Text>
            <FlatList
                horizontal
                data = {data}
                renderItem = {({item}) => <CardsManga item={item}/>}
                keyExtractor = {(item)=> item.id}
                contentContainerStyle={{
                    paddingTop: theme.metrics.px(300),
                    paddingLeft: theme.metrics.px(24)
                }}
            />
        </ListContainer>
    )
}