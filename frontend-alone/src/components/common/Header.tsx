import React, { useState } from "react";
import styled from "styled-components";
import { HeaderIcon, Profile } from "../../assets/common/index"
import { useNavigate } from "react-router-dom";
import { HeaderData } from "../../constants/index"

const Header = () => {

    const navigate = useNavigate()

    const [selected, setSelected] = useState<string | null>(null)

    const handleChangeClick = ({ name, id }: { name: string, id: string }) => {
        setSelected(name)
        navigate(`/${id}`)
    }

    return (
        <Container>
            <Contents>
                <HeaderIcon />
                {HeaderData.map((value, index) => (
                    <LinkText
                        key={index}
                        onClick={() => handleChangeClick({ name: value.name, id: value.id })}
                        selected={value.name === selected}
                    >
                        {value.text}
                    </LinkText>
                ))}
            </Contents>
            <Wrap onClick={() => navigate}>
                <UserName>임다영님</UserName>
                <Profile />
            </Wrap>
        </Container>
    )
}

export default Header

const Container = styled.div`
width: 100%;
padding: 30px 200px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Contents = styled.div`
display: flex;
align-items: center;
gap: 100px;
`

const Wrap = styled.div`
display: flex;
gap: 15px;
`

const LinkText = styled.p<{ selected: boolean }>`
font-family: "Pretendard-Regular";
font-size: 18px;
color: ${({ selected }) => (selected ? "#2661BB" : "#A0A0A0")};
`

const UserName = styled.p`
   font-family: "Pretendard-Regular";
   color: #A0A0A0;
`