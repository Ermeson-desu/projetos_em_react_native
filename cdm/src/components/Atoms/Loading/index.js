import {ActivityIndicator} from 'react-native';
import { LoadingStyle } from './styles';
import { colors } from '../../../styles/colors';


export const Loading= ({height,width}) =>{
    return(
        <LoadingStyle height={height} width={width}>
            <ActivityIndicator size={80} color={colors.dark_blue}/>
        </LoadingStyle>
    )
}