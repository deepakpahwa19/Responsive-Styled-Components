import React from 'react';
import { Navbar } from '../header/Navbar';
import { Footer } from '../footer/Footer';
import Main from '../main/Main';

export const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Main></Main>
            <Footer></Footer>
        </>
        // <h1>This is layout</h1>
    )
}

