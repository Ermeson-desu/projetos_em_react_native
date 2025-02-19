import React from "react";
import { CustomText } from "./styeld";

export const Text = ({children,color}) =>{
    <CustomText color={color}>
        {children}
    </CustomText>
}