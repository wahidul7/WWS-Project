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

const Page13 = () => {
  return (
    <Container>
      <Content>
        <Title>Training Services</Title>
        <p>
          We power the future ready workforce. With decades of industry
          expertise, an obsession with customer success, and a holistic Talent
          Experience Platform, we're here to help you unleash the limitless
          potential of your workforce and streamline how you do it. Powering the
          future ready workforce. The only end-to-end, skills-forward, and
          AI-powered system built for the new way we all work.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage
              src="WWS\Partners\centinial.png"
              alt="Centennial College Logo"
            />
            <p>Centennial College</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\george.png"
              alt="George Brown College Logo"
            />
            <p>George Brown College</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\mcmaster.png"
              alt="McMaster University Logo"
            />
            <p>McMaster University</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\mohawk.png"
              alt="Mohawk College Logo"
            />
            <p>Mohawk College</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\projectmanagemet.png"
              alt="Project Management Institute Logo"
            />
            <p>Project Management Institute</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\seneca.png"
              alt="Seneca College Logo"
            />
            <p>Seneca College</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\tmu.png"
              alt="Toronto Metropolitan University Logo"
            />
            <p>Toronto Metropolitan University</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\uft.png"
              alt="University of Toronto Logo"
            />
            <p>University of Toronto</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\handshake.jpeg" alt="Handshake Logo" />
            <p>Handshake</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\vtb.png"
              alt="Virtual Team Builders Logo"
            />
            <p>Virtual Team Builders</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\uom.jpeg"
              alt="The University of Michigan Logo"
            />
            <p>The University of Michigan</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page13;
