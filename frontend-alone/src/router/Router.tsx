import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/common/Layout";
import Login from "../pages/Auth/Login"
import SignUp from "../pages/Auth/SignUp";
import Main from "../pages/Main";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                
                <Route element={<Layout/>}>
                    <Route path="/main" element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}