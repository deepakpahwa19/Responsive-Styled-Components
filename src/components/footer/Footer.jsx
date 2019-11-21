import React from 'react'
import styled from "styled-components";

export const Footer = (props) => {


  return (
    <>
      <FooterStyle >
        <Container>
          <Content>@2015 COPYRIGHT. ALL RIGHTS RESERVED</Content>
        </Container>
      </FooterStyle>
    </>
  )
}


const FooterStyle = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #17191c;
  z-index: 1;
  font-size: 1.2rem;

`;

const Container = styled.div`
  max-width: 120rem;
  color: rgba(255, 255, 255, 0.4);
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 41px;

`;

const Content = styled.div`
  /* padding: 1rem */
`;