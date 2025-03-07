import styled from "styled-components/native";

/**
 * Componente Container
 * Utiliza Styled Components para criar um contêiner flexível com propriedades customizáveis.
 * Pode ajustar direção, alinhamento, e dimensões.
 */
export const Container = styled.View`
    display: flex;
    flex-direction: ${({dir})=> dir || 'column'};
    align-items: ${({align })=> align|| 'flex-start'};
    justify-content:${({justify })=> justify|| 'flex-start'};
    width: ${({theme,w})=> (w ? `${theme.metrics.px(w)}px`:'100%')};
    height: ${({theme,h})=> (h ? `${theme.metrics.px(h)}px`:'100%')};
`;