import { useEffect, useState } from "react";
import { Image } from "react-native";
import { PageMangaStyle, ImgStyle } from "./styles";

export let height_page, width_page;

export const PageManga = ({item}) =>{
    const [imgSize, setImgSize] = useState({height:300,width:200})

    useEffect(() => {
        if (item.image_url) {
            Image.getSize(item.image_url, (width, height) => {
                setImgSize({ width, height });
                width_page = imgSize.width
                height_page = imgSize.height
            }, (error) => {
                console.error("Erro ao carregar imagem:", error);
            });
        }
    }, [item]);

    return(
        <PageMangaStyle height={imgSize.height*2} width={imgSize.width}>
            <ImgStyle source = {{uri:item}} />
        </PageMangaStyle>
    )
}