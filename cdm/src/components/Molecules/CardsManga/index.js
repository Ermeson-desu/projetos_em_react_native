import React from "react";
import {CardContainer,CardImage} from './styles';

export const CardsManga = ({item, onPress}) =>{
    return(
        <CardContainer onPress={onPress}>
            <CardImage source={{ uri: item.image }} style={{ width: 130, height: 200 }} />
        </CardContainer>
    )
}
