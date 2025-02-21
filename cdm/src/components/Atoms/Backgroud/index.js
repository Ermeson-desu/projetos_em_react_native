import React from "react";
import {BackgroundImage} from './styles'
import Backgroundapp from '../../../../assets/background.png';


// Opacidade do fundo (padrão para a primeira opacidade)
const opacitys = {
    first: 1,
    second: 0.5
}

/**
 * Componente de fundo da tela.
 * Exibe uma imagem de fundo com diferentes níveis de opacidade.
 * @param {string} opacity - Controla a opacidade da imagem de fundo (pode ser 'first' ou 'second').
 * @returns {JSX.Element} - Retorna o componente de imagem de fundo.
 */
export const Background=({opacity})=>{
    return(
        <BackgroundImage 
            source={Backgroundapp}  // Fonte da imagem de fundo
            opacity = {opacitys[opacity||'first']} // Aplica a opacidade
        />
    )
};
