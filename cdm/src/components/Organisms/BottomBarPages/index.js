import { IconsButton } from '../../../components';
import { StyledContainerButtonsPages } from './styles';
import { colors } from '../../../styles/colors';

export const BottomBarPages = ({navigation}) => {
    return (
        <StyledContainerButtonsPages>
            <IconsButton name={'arrow-back-outline'} size={28} color={colors.white} onPress={() => navigation.navigate('Home')}/>
            <IconsButton name={'home'} size={28} color={colors.white} onPress={() => navigation.navigate('Home')} />
            <IconsButton name={'arrow-forward-outline'} size={28} color={colors.white} onPress={()=> navigation.navigate('Read')}/>
        </StyledContainerButtonsPages>
    );
};
