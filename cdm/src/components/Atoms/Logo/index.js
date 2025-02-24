import React from 'react';
import {LogoImage} from './styles'
import logoImage from '../../../../assets/logo_cmd.png';


// Definindo tamanhos e posições do logo
const sizes = {
    small:135 , // Tamanho pequeno
    large:293  // Tamanho grande
}



const positions = {
    frist: 0,  // Posição inicial (margem esquerda)
    second: 20, // Posição com margem diferente
    third: 235
}

// O componente Logo recebe duas propriedades: `size` e `position`
// - `size` (opções: 'small' ou 'large') define o tamanho do logo.
// - `position` (opções: 'frist' ou 'second') define a margem esquerda do logo.
export const Logo =({size, position,source, marginTop})=> {
    return(
        <LogoImage source={source||logoImage}   //A imagem do logo é importada e passada como source
            size={sizes[size||'large']}  // Define o tamanho do logo com base na propriedade `size`
            marginLeft={positions[position||'frist']}  // Define a margem esquerda com base na propriedade `position`
            marginTop ={marginTop}
        />
    )   
};
