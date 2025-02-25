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
            size={170}
            marginTop={20}
            marginLeft={0}
          />

          <Text marginLeft={165} 
          marginBottom={-5}>
          Ops..
          </Text>
          <Text 
          marginLeft={29} 
          size={18}

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