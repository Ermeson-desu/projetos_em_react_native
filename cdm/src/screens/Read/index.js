import { useNavigation } from "@react-navigation/native";
import { Backgroundfull, BottomBar, Container, Text } from "../../components";
import fanton from "../../../assets/fanton_ops.png";
import { Phantom } from "../../components/Atoms/Phantom";

export const Read = () => {
  const navigation = useNavigation()
  return (
    <Container align='center' justify='center'>
      <Backgroundfull>
          <Text marginLeft={178}>
          Ops..
          </Text>
          <Text>
          Parece que não tem nada por aqui.
          </Text>



          <Phantom 
            source={fanton} 
            size={269}
            width={259}
            heigth={269}
            
            />


  
      </Backgroundfull>
      <BottomBar navigation={navigation}/>

    </Container>
  );
};