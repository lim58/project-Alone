import React from "react";
import * as S from "../../components/auth/style"
import { Logo } from "../../assets/auth/index"
import Input from "../../components/auth/Input"
import Button from "../../components/auth/Button"

const Login = () => {
    return (
        <S.Container>
            <S.Content>
                <S.LogoWrap>
                    <Logo/>
                    <S.Title>Login</S.Title>
                </S.LogoWrap>
                <S.InputWrap>
                    <Input/>
                    <Input/>
                </S.InputWrap>
                <S.LinkWrap>
                    <Button/>
                    <S.LinkText>회원가입 하러가기</S.LinkText>
                </S.LinkWrap>
            </S.Content>
        </S.Container>
    )
}

export default Login