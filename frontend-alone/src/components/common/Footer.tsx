import React from "react";
import styled from "styled-components";
import { FooterData } from "../../constants/index"

const Footer = () => {
    return (
        <Container>
            <Title>alone</Title>
            <ContentBox>
                {FooterData.map((value, index) => (
                    <Content key={index}>
                        <SubTitle>{value.subTitle}</SubTitle>
                        <Text>{value.text}</Text>
                    </Content>
                ))}
            </ContentBox>
        </Container>
    )
}

export default Footer

const Container = styled.div`
width: 100%;
background-color: #242424;
display: flex;
flex-direction: column;
padding: 30px 100px;
gap: 10px;
`

const ContentBox = styled.div`
display: flex;
gap: 70px;
`

const Content = styled.div``

const Title = styled.p`
font-family: "Pretendard-Semibold";
font-size: 20px;
color: #fff;
`

const SubTitle = styled.p`
font-family: "Pretendard-Medium";
font-size: 16px;
color: #A3A3A3;
`

const Text = styled.p`
font-family: "Pretendard-Regular";
font-size: 14px;
color: #fff;
`