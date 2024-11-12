import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-top: 620px;
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

const Page5 = () => {
  return (
    <Container>
      <Content>
        <Title>IT Hardware Solutions</Title>
        <p>
          Are you looking for a hardware solution provider, a second opinion on
          what your current provider suggests or advice what-to-buy or not? If
          your answer is yes, we can help you.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage src="WWS\Partners\canon.png" alt="Canon Logo" />
            <p>Canon</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\cisco.png" alt="Cisco Logo" />
            <p>Cisco</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\dellEMC.png" alt="Dell Logo" />
            <p>Dell</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\dlink.png" alt="D-Link Logo" />
            <p>D-Link</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\ecin.png" alt="ECIN Logo" />
            <p>ECIN</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\hpe.png" alt="HPE Logo" />
            <p>HPE</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\ingrammicro.png"
              alt="Ingram Micro Logo"
            />
            <p>Ingram Micro</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\jabra.jpg" alt="Jabra Logo" />
            <p>Jabra</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\lexmark.png" alt="Lexmark Logo" />
            <p>Lexmark</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\plantronics.png"
              alt="Plantronics Logo"
            />
            <p>Plantronics</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\techdata.png" alt="Tech Data Logo" />
            <p>Tech Data</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\VMware2.png" alt="VMware Logo" />
            <p>VMware</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page5;
