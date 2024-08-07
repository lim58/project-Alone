import React from "react";
import * as S from "../../components/auth/style"
import { Logo } from "../../assets/index"
import Input from "../../components/auth/Input"
import Button from "../../components/auth/Button"
import { AuthSignUp } from "../../constants";
import { useRecoilValue } from "recoil";
import { signUpInputAtom } from "../../assets/atom/authAtom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate()
    const inputData = useRecoilValue(signUpInputAtom)

    return (

        <S.Container>
            <S.Content>
                <S.LogoWrap>
                    <Logo/>
                    <S.Title>SignUp</S.Title>
                </S.LogoWrap>
                <S.InputWrap>
                    {
                        AuthSignUp.map((value, index) => (
                            <Input data={value} key={index}/>
                        ))
                    }
                </S.InputWrap>
                <S.LinkWrap>
                    <Button text="SignUp"/>
                    <S.LinkText onClick={() => navigate("/login")}>로그인 하러가기</S.LinkText>
                </S.LinkWrap>
            </S.Content>
        </S.Container>
    )
}

export default SignUp