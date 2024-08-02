import React from "react";
import styled from "styled-components";
import { InputProps } from "../../models/auth"

const Input: React.FC<InputProps> = ({ data, key }) => {
    return (
        <>
            <Container key={key}>
                <Icon>
                    {data.icon}
                </Icon>
                <InputWrap name={data.name} placeholder={data.placeholder} />
            </Container>
        </>
    )
}

export default Input

const Container = styled.div`
    width: 360px;
    position: relative;
`

const Icon = styled.div`
    position: absolute;
    top: 12px;
    left: 10px;
`

const InputWrap = styled.input`
    width: 100%;
    display: flex;
    padding: 14px 10px 14px 40px;
    gap: 10px;
    border-bottom: 1.5px solid #D1D1D1;
    font-family: "Pretendard-Regular";
    font-size: 16px;
    
    ::placeholder {
        color: #BABABA;
    }
   
`
