import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 0;
  background-color: #f4f4f4;
`;

const Content = styled.div`
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

const Page8 = () => {
  return (
    <Container>
      <Content>
        <Title>Payment, Accounting and Web Solutions</Title>
        <p>
          We partnered with the best providers based on their reliability,
          customer service, calling features, user reviews, and pricing.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage src="WWS\Partners\wave.png" alt="Wave Accounting Logo" />
            <p>Wave Accounting</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\qb.jpg" alt="QuickBooks Logo" />
            <p>QuickBooks</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\stripe.png" alt="Stripe Logo" />
            <p>Stripe</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\wave.png" alt="Wave Accounting Logo" />
            <p>Wave Accounting</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\qb.jpg" alt="QuickBooks Logo" />
            <p>QuickBooks</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\stripe.png" alt="Stripe Logo" />
            <p>Stripe</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page8;
