import React from "react";
import Login from "../components/auth/Login";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home=(props)=>{
    return(
        <>
            <Header />
            <Hero />
            <Login />
        </>
    )
}

export default Home
