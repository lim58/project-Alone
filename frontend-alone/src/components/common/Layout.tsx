import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </>
    )
}

export default Layout

const Content = styled.div`
min-height: calc(100vh - 150px);
background-color: red;
`