import {TouchableWithoutFeedback} from "react-native";
import { Container,PageList, BottomBarPages} from "../../components";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";


export const Page = () => {
    const [visibleChapterBar,setVisibleChapterBar] = useState(false)
    const navigation = useNavigation()

    return(
        <TouchableWithoutFeedback onPress={(e)=>setVisibleChapterBar(!visibleChapterBar)}>
            <Container>
                <PageList/>
                <BottomBarPages navigation={navigation}/>
            </Container>
        </TouchableWithoutFeedback>
    )
}
