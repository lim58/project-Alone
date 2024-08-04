import React from "react";
import styled from "styled-components";

interface ButtonProps {
    text : string
}

const Button = ({text} : ButtonProps) => {
    return (
        <Container>
            {text}
        </Container>
    )
}

export default Button

const Container = styled.div`
    width: 360px;
    background-color: #2079FF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    font-family: "Pretendard-Medium";
    font-size: 18px;
    color: #FFFFFF;

    &:hover {
        background-color: #1e6bde;
    }
`