import styled from 'styled-components/native';

export const LogoImage = styled.Image`
    position: absolute;
    resize-mode: contain;
    heigth:${({size,theme}) => theme.metrics.px(size)}px;
    width:${({size,theme})=>theme.metrics.px(size)}px;
`;

