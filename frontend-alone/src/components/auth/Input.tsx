import React from "react";
import styled from "styled-components";
import { AuthLogin } from "../../constants";
import { LoginDataType } from "../../models/auth"

const Input = () => {
    return (
        <>
            {
                AuthLogin.map((value: LoginDataType, index: number) => (
                    <Container key={index}>
                        <Icon>
                            {value.icon}
                        </Icon>
                        <InputWrap placeholder={`${value.placeholder}`} />
                    </Container>
                ))
            }
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
