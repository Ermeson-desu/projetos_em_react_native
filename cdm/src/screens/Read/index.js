import { useNavigation } from "@react-navigation/native";
import { Backgroundfull, BottomBar, Container, Text } from "../../components";
import fanton from "../../../assets/fanton_ops.png";
import { Phantom } from "../../components/Atoms/Phantom";
import cards from "../../../assets/Cards_black.png"

export const Read = () => {
  const navigation = useNavigation()
  return (
    <Container align='center' justify='center'>
      <Backgroundfull>
          <Phantom source={cards} 
            size={200}
            marginLeft={10}
          />

          <Text marginLeft={170} 
          marginBottom={-5}>
          Ops..
          </Text>
          <Text 
          marginLeft={29} 
          size={20}

          >
          Parece que não tem nada por aqui.
          </Text>


          <Phantom 
            source={fanton} 
            size={250}
            marginRight={500}
            marginLeft={50}
            marginTop={10}
            
            
            />


  
      </Backgroundfull>
      <BottomBar navigation={navigation}/>

    </Container>
  );
};