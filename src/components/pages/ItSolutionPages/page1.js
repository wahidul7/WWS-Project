import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-top: 570px;
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
`;

const SubTitle = styled.h2`
  color: #333;
  margin-top: 20px;
`;

const AllianceLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  justify-content: space-around;
`;

const Logo = styled.div`
  flex: 1 1 30%;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 10px;
`;

const Page1 = () => {
  return (
    <Container>
      <Content>
        <Title>Cloud Consulting and Implementation</Title>
        <p>
          We analyze your current business computing environment and determine
          if cloud computing is the right solution for your business. Our
          suggested cloud computing approach can help you make the most of
          current cloud technology.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage src="WWS/Partners/aws.png" alt="Amazon Cloud Logo" />
            <p>Amazon Cloud</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS/Partners/dellEMC.png" alt="Dell EMC Logo" />
            <p>Dell EMC</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS/Partners/gcloud.svg.png"
              alt="Google Cloud Logo"
            />
            <p>Google Cloud</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS/Partners/ibm.png" alt="IBM Cloud Logo" />
            <p>IBM Cloud</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS/Partners/ingram.svg.png"
              alt="Ingram Cloud Services Logo"
            />
            <p>Ingram Cloud Services</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS/Partners/jolera.png" alt="Jolera Logo" />
            <p>Jolera</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS/Partners/azure.png"
              alt="Microsoft Azure Logo"
            />
            <p>Microsoft Azure</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS/Partners/pax8.png" alt="Pax 8 Cloud Logo" />
            <p>Pax 8 Cloud</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS/Partners/tng.png"
              alt="TNG Cloud Workspace Logo"
            />
            <p>TNG Cloud Workspace</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page1;
