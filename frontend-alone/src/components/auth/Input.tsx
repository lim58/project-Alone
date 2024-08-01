import React from "react";
import styled from "styled-components";
import { UserNameIcon, UserIdIcon, UserPwIcon } from "../../assets/auth";

const Input = () => {
    return (
        <Container>
            <Icon>
                <UserNameIcon />
            </Icon>
            <InputWrap placeholder="아이디를 입력해주세요" />
        </Container>
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
