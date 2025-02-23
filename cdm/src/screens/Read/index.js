import { useNavigation } from "@react-navigation/native";
import { Backgroundfull, BottomBar, Container } from "../../components";

export const Read = () => {
  const navigation = useNavigation()
  return (
    <Container align='center' justify='center'>
      <Backgroundfull>
  
      </Backgroundfull>
      <BottomBar navigation={navigation}/>

    </Container>
  );
};