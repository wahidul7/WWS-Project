import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  width: 100%;
  padding: 0;
  background-color: #f4f4f4;
`;

const Content = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  color: #333;
  margin-top: 20px;
`;

const AllianceLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: space-around; /* Ensure logos are spaced properly */
`;

const Logo = styled.div`
  flex: 1 1 30%; /* Ensure 3 items per row */
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 10px; /* Space between the logo and text */
`;

const Page10 = () => {
  return (
    <Container>
      <Content>
        <Title>Software Development Solutions</Title>
        <p>
          We provide on-demand development of specialized software to help
          improve your business.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage
              src="WWS\Partners\access.png"
              alt="Access IT Automation Logo"
            />
            <p>Access IT Automation</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\eloncity.png" alt="Eloncity Logo" />
            <p>Eloncity</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\mobilesurety.png"
              alt="Mobile Surety Logo"
            />
            <p>Mobile Surety</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\opensource.png"
              alt="Open Source Logo"
            />
            <p>Open Source</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\oracle.png" alt="Oracle Logo" />
            <p>Oracle</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\sap.png" alt="SAP Partners Logo" />
            <p>SAP Partners</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\symtech.png"
              alt="Symtechven Soluciones Logo"
            />
            <p>Symtechven Soluciones</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page10;
