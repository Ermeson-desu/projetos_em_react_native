import { Img_container, ImageStyle } from "./styles";

export const Phantom = ({
    source, 
    size,
    marginLeft, 
    marginRight, 
    marginTop, 
    marginBotton,

}) => {
    return (
        <Img_container>
            <ImageStyle 
                source={source} 
                size={size}
                marginBotton={marginBotton}
                marginLeft={marginLeft}
                marginRight={marginRight}
                marginTop={marginTop}
        />
        </Img_container>
    )
};