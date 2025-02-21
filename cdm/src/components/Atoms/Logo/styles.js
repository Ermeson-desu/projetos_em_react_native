import styled from 'styled-components/native';

//Não mexa aqui
// Define o estilo do componente LogoImage usando Styled Components
export const LogoImage = styled.Image`
    position: absolute;
    resize-mode: contain;
    margin-top: -${({theme})=>theme.metrics.px(15)}px;
    heigth:${({size,theme}) => theme.metrics.px(size)}px;
    width:${({size,theme})=>theme.metrics.px(size)}px;
`;

