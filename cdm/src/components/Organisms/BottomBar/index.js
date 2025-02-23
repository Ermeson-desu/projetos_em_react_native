import { IconsButton } from '../../../components';
import { StyledContainerButtons } from './styles';
import { colors } from '../../../styles/colors';

export const BottomBar = ({navigation}) => {
    return (
        <StyledContainerButtons>
            <IconsButton name={'home'} size={28} color={colors.white} onPress={() => navigation.navigate('Home')}/>
            <IconsButton name={'search-outline'} size={28} color={colors.white} />
            <IconsButton name={'bookmark-outline'} size={28} color={colors.white} />
            <IconsButton name={'person'} size={28} color={colors.white} />
        </StyledContainerButtons>
    );
};
