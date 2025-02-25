import React from "react";
import {CardContainer,CardImage} from './styles';

export const CardsManga = ({item,onPress}) =>{
    return(
        <CardContainer onPress={onPress}>
            <CardImage source={{uri: item.image_url}}/>
        </CardContainer>
    )
}