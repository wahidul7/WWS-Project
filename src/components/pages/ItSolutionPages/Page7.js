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

const Page7 = () => {
  return (
    <Container>
      <Content>
        <Title>IP Mobile & Virtual Telephony</Title>
        <p>
          Communicate and collaborate your way, on any device. Cloud phone
          system, team collaboration, video conferencing, contact Center, online
          Fax.
        </p>

        <SubTitle>Strategic Alliances</SubTitle>
        <AllianceLogos>
          <Logo>
            <LogoImage
              src="WWS\Partners\8x8.png"
              alt="8X8 Communications Logo"
            />
            <p>8X8 Communications</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\cisco.png" alt="Cisco Logo" />
            <p>Cisco</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\goto.jpeg" alt="GoTo Connect Logo" />
            <p>GoTo Connect</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\mitel.png" alt="Mitel Logo" />
            <p>Mitel</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\ringcentral.png"
              alt="RingCentral Logo"
            />
            <p>RingCentral</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\vonage.png" alt="Vonage Logo" />
            <p>Vonage</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\avaya.png" alt="Avaya Logo" />
            <p>Avaya</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\google.png" alt="Google Logo" />
            <p>Google</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\microsoft.png" alt="Microsoft Logo" />
            <p>Microsoft</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\net2.png" alt="Net2Phone Logo" />
            <p>Net2Phone</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\ooma.png" alt="Ooma Logo" />
            <p>Ooma</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\talkdask.png" alt="TalkDesk Logo" />
            <p>TalkDesk</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\UnitedCloud.png"
              alt="United Cloud Logo"
            />
            <p>United Cloud</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\vitel.jpeg"
              alt="Vitel Global Cloud PBX Logo"
            />
            <p>Vitel Global Cloud PBX</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\zoom.png" alt="Zoom Logo" />
            <p>Zoom</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\a1.png" alt="A1 Logo" />
            <p>A1</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\americamovil.png"
              alt="América Móvil Logo"
            />
            <p>América Móvil</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\at&t.png" alt="AT&T Logo" />
            <p>AT&T</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\axi.png"
              alt="Axiata Group Berhad Logo"
            />
            <p>Axiata Group Berhad</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\bell.png" alt="Bell Canada Logo" />
            <p>Bell Canada</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\bht.png" alt="BH Telecom Logo" />
            <p>BH Telecom</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\airtel.png"
              alt="Bharti Airtel Limited Logo"
            />
            <p>Bharti Airtel Limited</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\bsnl.png" alt="BSNL Mobile Logo" />
            <p>BSNL Mobile</p>
          </Logo>
          <Logo>
            <LogoImage src="" alt="British Mobile Logo" />
            <p>British Mobile</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\chinamobile.png"
              alt="China Mobile Logo"
            />
            <p>China Mobile</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\chinatelecom.png"
              alt="China Telecom Logo"
            />
            <p>China Telecom</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\chinaunicom.png"
              alt="China Unicom Logo"
            />
            <p>China Unicom</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\deutele.webp"
              alt="Deutsche Telekom Logo"
            />
            <p>Deutsche Telekom</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\digi.png" alt="Digi Logo" />
            <p>Digi</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\ee.png" alt="EE Logo" />
            <p>EE</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\etisalat.png" alt="Etisalat Logo" />
            <p>Etisalat</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\fido.png" alt="Fido Logo" />
            <p>Fido</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\freedom.png"
              alt="Freedom Mobile Logo"
            />
            <p>Freedom Mobile</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\gib.png" alt="Gibtelecom Logo" />
            <p>Gibtelecom</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\koodo.png" alt="Koodo Mobile Logo" />
            <p>Koodo Mobile</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\kpn.png" alt="KPN Logo" />
            <p>KPN</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\meo.png" alt="MEO Logo" />
            <p>MEO</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\monaco.png"
              alt="Monaco Telecom Logo"
            />
            <p>Monaco Telecom</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\movistar.png" alt="Movistar Logo" />
            <p>Movistar</p>
          </Logo>
          <Logo>
            <LogoImage
              src="WWS\Partners\mtn.png"
              alt="MTN Group Limited Logo"
            />
            <p>MTN Group Limited</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\mts.png" alt="MTS Logo" />
            <p>MTS</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\ntt.jpeg" alt="NTT Docomo Logo" />
            <p>NTT Docomo</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\o2.png" alt="O2 Logo" />
            <p>O2</p>
          </Logo>
          <Logo>
            <LogoImage src="WWS\Partners\orange.webp" alt="Orange Logo" />
            <p>Orange</p>
          </Logo>{" "}
        </AllianceLogos>
      </Content>
    </Container>
  );
};

export default Page7;
