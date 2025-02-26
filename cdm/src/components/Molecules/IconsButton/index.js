import { Icons} from '../../../components/Atoms';
import { StyledIconsButton} from './styles';


export const IconsButton = ({ name, size, color, onPress}) => {
    return (
        <StyledIconsButton onPress={onPress}>
            <Icons name={name} size={size} color={color}/>
        </StyledIconsButton>
    )
}