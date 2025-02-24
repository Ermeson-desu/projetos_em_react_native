import styled from "styled-components/native";

export const Backgroundfullcontainer = styled.View.attrs({
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: { flexGrow: 1 },
})`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
