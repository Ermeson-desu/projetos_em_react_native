import styled from "styled-components";

export const Img_container = styled.View `
    height: ${({theme,size})=>theme.metrics.px(size)}px;
    width: ${({theme,size})=>theme.metrics.px(size)}px;
    margin-bottom: ${({theme,marginBotton})=>theme.metrics.px(marginBotton)}px;
    margin-left: ${({theme, marginLeft})=>theme.metrics.px(marginLeft)}px;
    margin-top:  ${({theme, marginTop})=>theme.metrics.px(marginTop)}px;
    margin-right: ${({theme, marginRight})=>theme.metrics.px(marginRight)}px;
    display: flex; 
    aligtItems: center; 
    justifyContent: center; 
`; 

export const ImageStyle = styled.Image`
    height: ${({theme,size})=>theme.metrics.px(size)}px;
    width: ${({theme,size})=>theme.metrics.px(size)}px;
     
`;