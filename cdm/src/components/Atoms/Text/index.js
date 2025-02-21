// Importa o estilo do texto
import React from "react";
import { CustomText } from "./styles";


// Componente Text recebe o conteúdo (children) e a cor do texto como propriedades
export const Text = ({children,color}) =>{
    return (
        <CustomText color={color}>
            {children}
        </CustomText>
    )
}