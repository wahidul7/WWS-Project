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

const Page4 = () => {
  return (
    <Container>
      <Content>
        <Title>Communication Systems</Title>
        <p>
          Designing Communication Systems for Government, Education, Healthcare,
          and all Businesses and Industries.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage src="WWS\Partners\andrew.png" alt="Andrew Logo" />
            <p>Andrew</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\arc.jpeg" alt="Arc Wireless Logo" />
            <p>Arc Wireless</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\aviat.png" alt="Aviat Networks Logo" />
            <p>Aviat Networks</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\kavveri.png"
              alt="Kavveri Technologies Logo"
            />
            <p>Kavveri Technologies</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\rfs.png"
              alt="Radio Frequency Systems Logo"
            />
            <p>Radio Frequency Systems</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\radiowaves.png"
              alt="Radiowaves Logo"
            />
            <p>Radiowaves</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\wade.png" alt="Wade Antena Logo" />
            <p>Wade Antena</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page4;
