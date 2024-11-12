import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-top: 980px;
  width: 100%;
  padding: 0;
  background-color: #f4f4f4;
`;

const Content = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 20px;
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

const Page3 = () => {
  return (
    <Container>
      <Content>
        <Title>Data Recovery and Data Migration</Title>
        <p>
          Business data protection is the heart of all business continuity
          strategies. We have the expertise and solutions available to suit your
          business needs. We know how awful the thought of losing your
          irreplaceable business data can be, that the reason why we take the
          time to know your unique story and business requirements.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage
              src="WWS\Partners\acronis.png"
              alt="Acronis Disaster Recovery Service Logo"
            />
            <p>Acronis Disaster Recovery Service</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\agility.jpeg"
              alt="Agility Recovery Disaster Recovery Services Logo"
            />
            <p>Agility Recovery Disaster Recovery Services</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\arcserver.png"
              alt="Arcserve Cloud Services Logo"
            />
            <p>Arcserve Cloud Services</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\azure.png"
              alt="Azure Site Recovery Logo"
            />
            <p>Azure Site Recovery</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\c60.png"
              alt="Carbon60 Managed Cloud Logo"
            />
            <p>Carbon60 Managed Cloud</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\cgs.jpeg"
              alt="CGS Cloud Services Logo"
            />
            <p>CGS Cloud Services</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\cohesity.png"
              alt="Cohesity Site Continuity Logo"
            />
            <p>Cohesity Site Continuity</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\connectwize.png"
              alt="ConnectWise BCDR Logo"
            />
            <p>ConnectWise BCDR</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\ntt.jpeg"
              alt="NTT Communications Disaster Recovery Logo"
            />
            <p>NTT Communications Disaster Recovery</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\Quorum.png" alt="Quorum onQ Logo" />
            <p>Quorum onQ</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\sungard.jpeg"
              alt="Sungard Availability Services DRaaS Logo"
            />
            <p>Sungard Availability Services DRaaS</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\unitrends.png" alt="Unitrends Logo" />
            <p>Unitrends</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\vmware1.png"
              alt="VMware Site Recovery Logo"
            />
            <p>VMware Site Recovery</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\yash.jpg"
              alt="YASH Technologies IT Services and Solutions Logo"
            />
            <p>YASH Technologies IT Services and Solutions</p>
          </Logo>
          <Logo>
            <LogoImage src="" alt="Bell.One Backup Logo" />
            <p>Bell.One Backup</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\tata.png"
              alt="Tata Communications Managed Services Logo"
            />
            <p>Tata Communications Managed Services</p>
          </Logo>
          <Logo>
            <LogoImage
              src=""
              alt="WannaGo Virtual Disaster Recovery Service Logo"
            />
            <p>WannaGo Virtual Disaster Recovery Service</p>
          </Logo>
          <Logo>
            <LogoImage src="" alt="CAPS Disaster Recovery Services Logo" />
            <p>CAPS Disaster Recovery Services</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page3;
