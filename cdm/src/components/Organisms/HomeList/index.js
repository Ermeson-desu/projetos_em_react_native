import React from "react";
import { FlatList } from "react-native";
import { Text } from "../../Atoms";
import {CardsManga} from '../../Molecules';
import { ListContainer } from "./styles"; 
import {theme} from '../../../styles/theme';

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