import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-top: 600px;
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
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  color: #666;
  margin: 10px;
`;

const Page6 = () => {
  return (
    <Container>
      <Content>
        <Title>Virtual CIO/CTO Service</Title>
        <p>
          We provide responsive, professional IT support and technology services
          for your business, performing regular ongoing maintenance, monitoring,
          and data backups.
        </p>
        <p>
          Virtual CIO/CTO Services are a collection of services based upon the
          duties of key IT personnel in a large organization including the Chief
          Information Officer, Chief Technology Officer and Trusted Advisor.
        </p>

        <Section>
          <SectionTitle>Chief Information Officer Services (CIO)</SectionTitle>
          <p>
            Consulting services designed to assist small and medium sized
            businesses (SMBs) in aligning their IT Strategic Plan with the
            overall Strategic Plan of the organization.
          </p>
        </Section>

        <Section>
          <SectionTitle>Chief Technology Officer Services (CTO)</SectionTitle>
          <p>
            Consulting services designed to assist small and medium sized
            businesses (SMBs) in designing, implementing, measuring, and
            maintaining all aspects of their IT systems to ensure that IT
            systems are functioning with the maximum performance, accuracy,
            reliability, and availability.
          </p>
        </Section>

        <Section>
          <SectionTitle>Trusted Advisor Services</SectionTitle>
          <p>
            WWS consulting services are designed to assist small and medium
            sized business (SMB) owners and managers by providing answers to
            technology questions as a trusted technical expert. The technology
            questions that are answered by a Trusted Advisor help SMB owners and
            managers achieve several important strategic goals including
            Business Process Improvements to maximize the utilization of IT in
            the workplace, and design and purchasing advice that assists SMB
            owners and managers in achieving the lowest total cost of ownership
            in their IT Infrastructure.
          </p>
        </Section>
      </Content>
    </Container>
  );
};

export default Page6;
