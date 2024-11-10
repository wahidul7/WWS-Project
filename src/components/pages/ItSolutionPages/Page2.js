import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-top: 1250px;
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

const SectionTitle = styled.h3`
  color: #666;
  margin-top: 20px;
`;

const AllianceLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
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

const Page2 = () => {
  return (
    <Container>
      <Content>
        <Title>Anti-virus & Cyber Security Services</Title>
        <p>
          Cybersecurity Is Complicated. Let us do it for you! We have expertise
          in comprehensive security services including Managed Security
          supported by our customized Professional Services Team.
        </p>

        <SectionTitle>Anti-Virus</SectionTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage src="WWS\Partners\avg.png" alt="AVG Logo" />
            <p>AvG</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\bit.png" alt="Bitdefender Logo" />
            <p>Bitdefender</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\eset.png" alt="ESET Logo" />
            <p>ESET</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\kaspersky.svg.png"
              alt="Kaspersky Logo"
            />
            <p>Kaspersky</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\mal.png" alt="Malwarebytes Logo" />
            <p>Malwarebytes</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\microsoft.png" alt="Microsoft Logo" />
            <p>Microsoft</p>
          </Logo>
        </AllianceLogos>

        <SectionTitle>Cyber Security</SectionTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage
              src="WWS\Partners\akamai.png"
              alt="Akamai Technologies Logo"
            />
            <p>Akamai Technologies</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\check.png"
              alt="Check Point Software Technologies Logo"
            />
            <p>Check Point Software Technologies</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\cisco.png" alt="Cisco Logo" />
            <p>Cisco</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\crowd.png" alt="CrowdStrike Logo" />
            <p>CrowdStrike</p>
          </Logo>
          <Logo>
            <LogoImage src="" alt="CyberArk Logo" />
            <p>CyberArk</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\dark.jpeg" alt="Darktrace Logo" />
            <p>Darktrace</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\deep.png" alt="Deep Instinct Logo" />
            <p>Deep Instinct</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\fort.png" alt="Fortinet Logo" />
            <p>Fortinet</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\hacker.png" alt="HackerOne Logo" />
            <p>HackerOne</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\logmein.png" alt="LogMeIn Logo" />
            <p>LogMeIn</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\microsoft.png" alt="Microsoft Logo" />
            <p>Microsoft</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\netscout.png" alt="Netscout Logo" />
            <p>Netscout</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\palo.png"
              alt="Palo Alto Networks Logo"
            />
            <p>Palo Alto Networks</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\one.png" alt="One Identity Logo" />
            <p>One Identity</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\rsa.png" alt="RSA Logo" />
            <p>RSA</p>
          </Logo>
          <Logo>
            <LogoImage src="" alt="Sailpoint Logo" />
            <p>Sailpoint</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\splunk.png" alt="Splunk Logo" />
            <p>Splunk</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\trend.png" alt="Trend Micro Logo" />
            <p>Trend Micro</p>
          </Logo>
          <Logo>
            <LogoImage src="" alt="Trustwave Logo" />
            <p>Trustwave</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\vmware"
              alt="VMware Carbon Black Logo"
            />
            <p>VMware Carbon Black</p>
          </Logo>
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page2;
