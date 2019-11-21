import React from 'react'
import styled from "styled-components";

export const Navbar = (props) => {

  return (
    <>
      <NavBar >
        <Container>
          Blogs
        </Container>
      </NavBar>
    </>
  )
}


const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #212429;
  z-index: 1;
  font-size: 1.4rem;
  height: 49px;
`;

const Container = styled.div`
  max-width: 120rem;
  color: #fefefe;
  margin: auto;
  padding: 1rem;;
  justify-content: space-between;
  height: 5rem;
  font-weight: bold;
  font-size: 2rem;
`;