import { Icons, Container} from '../../components';
import { StyledIconsButton } from './styles';


export const IconsButton = ({ name, size, color }) => {
    return (
        <Container align='center' justify='center'>
            <StyledIconsButton>
                <Icons name={name} size={size} color={color}/>
            </StyledIconsButton>
        </Container>
    )
}