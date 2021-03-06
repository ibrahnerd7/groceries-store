import React from "react";
import Clients from "../components/Clients";
import Grocery from "../components/Grocery";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home=(props)=>{
    return(
        <>
            <Header />
            <Hero />
            <Clients />
            <Grocery />
        </>
    )
}

export default Home
