import React from "react";
import styled from "styled-components";
import Background from "../../assets/auth/Background.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 70px;
    gap: 55px;
    background-color: #fff;
    border-radius: 30px;
`

export const LogoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
`

export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const LinkWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

export const LinkText = styled.div`
    font-family: "Pretendard-Medium";
    font-size: 14px;
    color: #BABABA;

    &:hover {
        color: #9B9B9B;
    }
`

export const Title = styled.p`
    font-family: "Pretendard-Semibold";
    font-size: 38px;
`