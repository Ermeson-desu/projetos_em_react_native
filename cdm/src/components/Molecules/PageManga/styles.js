import styled from "styled-components/native";


export const PageMangaStyle = styled.View`
    
    display:flex;
    align-items:center;
    height:${({height,theme})=>theme.metrics.px(height)}px;
    width:${({width, theme})=> theme.metrics.px(width)}px;
`;

export const ImgStyle = styled.Image`
    width: 100%;
    height: 100%;
`;