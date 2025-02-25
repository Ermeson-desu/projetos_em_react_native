import { useEffect, useState } from "react";
import { Image } from "react-native";
import { PageMangaStyle, ImgStyle } from "./styles";

export let height_page;

export const PageManga = ({item}) =>{
    const [imgSize, setImgSize] = useState({height:300,width:200})

    useEffect(() => {
        if (item.image_url) {
            Image.getSize(item.image_url, (width, height) => {
                setImgSize({ width, height });
                height_page = imgSize
            }, (error) => {
                console.error("Erro ao carregar imagem:", error);
            });
        }
    }, [item.image_url]);

    return(
        <PageMangaStyle height={imgSize.height} width={imgSize.width}>
            <ImgStyle source = {{uri:item.image_url}} resizeMode='response'/>
        </PageMangaStyle>
    )
}