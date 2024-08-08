import React from "react";
import * as S from "../../components/auth/style"
import { Logo } from "../../assets/common/index"
import Input from "../../components/auth/Input"
import Button from "../../components/auth/Button"
import { AuthLogin } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginInputAtom } from "../../atom/authAtom";

const Login = () => {

    const navigate = useNavigate()
    const inputData = useRecoilValue(loginInputAtom)

    return (

        <S.Container>
            <S.Content>
                <S.LogoWrap>
                    <Logo/>
                    <S.Title>Login</S.Title>
                </S.LogoWrap>
                <S.InputWrap>
                    {
                        AuthLogin.map((value, index) => (
                            <Input data={value} key={index}/>
                        ))
                    } 
                </S.InputWrap>
                <S.LinkWrap>
                    <Button text="Login"/>
                    <S.LinkText onClick={() => navigate("/signUp")}>회원가입 하러가기</S.LinkText>
                </S.LinkWrap>
            </S.Content>
        </S.Container>
    )
}

export default Login