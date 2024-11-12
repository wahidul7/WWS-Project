import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-top: 400px;
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

const Page11 = () => {
  return (
    <Container>
      <Content>
        <Title>IT Financing Options</Title>
        <p>
          A traditional lease option for procuring technology solutions. Connect
          with us to learn more about lease options programs.
        </p>
        <p>
          TAMCO offers a variety of finance options for telecommunications,
          unified communications, and technology solutions. We have capital
          expense (CAPEX) and operating expense (OPEX) lease programs to suit
          every customer’s need. TAMCO offers competitive rates with traditional
          lease options as well as exclusive lease alternatives that deliver
          benefits found nowhere else in the marketplace.
        </p>
        <p>
          Our service-oriented culture is committed to delivering identifiable
          value to each of our business partners and their end customers alike.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage src="WWS\Partners\tamco.png" alt="TAMCO Logo" />
            <p>TAMCO, Innovative Technology Leasing</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\affiliated.png"
              alt="Affiliated Financial Services Logo"
            />
            <p>Affiliated Financial Services</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page11;
