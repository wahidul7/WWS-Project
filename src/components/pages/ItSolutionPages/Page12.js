import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-top: 1140px;
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

const Page12 = () => {
  return (
    <Container>
      <Content>
        <Title>Project Management Services</Title>
        <p>
          We help businesses that do not have their own project managers,
          augment existing project managers’ abilities, lack project management
          capacity or simply wish to have a consultation with an expert. We help
          you improve PMO performance with proven project management consulting
          and time-tested approaches that have been implemented in hundreds of
          organizations.
        </p>

        <Section>
          <SectionTitle>Project Review & Recovery</SectionTitle>
          <p>
            With so much at stake, fast action is the key to avoiding losses
            associated with project failures. WWS’ experts address common areas
            of concern including scope, resource availability, and project
            controls to turn around a troubled project quickly.
          </p>
        </Section>

        <Section>
          <SectionTitle>Project Management Maturity Advancement</SectionTitle>
          <p>
            We work with our clients to assess the current level of maturity,
            develop an achievable improvement plan, and help keep the momentum
            going by supporting the execution and measurement of the recommended
            improvements.
          </p>
        </Section>

        <Section>
          <SectionTitle>Organizational Change Management</SectionTitle>
          <p>
            Organizational Culture influences how organizational strategy is
            executed. As strategies evolve in response to market conditions,
            organizational cultures must also shift to be aligned and derive the
            most beneficial outcomes of the strategic changes.
          </p>
        </Section>

        <Section>
          <SectionTitle>
            Project Management Methodology Implementation
          </SectionTitle>
          <p>
            Implementation is a collaborative process, with final methodology
            ownership in your hands. Our methodology implementation approaches
            are designed to foster acceptance and make the adoption of a
            standard methodology welcomed within your organization's culture.
          </p>
        </Section>

        <Section>
          <SectionTitle>Demand Management</SectionTitle>
          <p>
            The convergence of portfolio and resource management to meet
            business and project demands.
          </p>
        </Section>

        <Section>
          <SectionTitle>Project Management Mentors</SectionTitle>
          <p>
            WWS’ Mentors work closely with your project managers and project
            personnel to build project management competency while ensuring
            successful execution of projects.
          </p>
        </Section>

        <Section>
          <SectionTitle>Resource Management</SectionTitle>
          <p>
            WWS helps you obtain, structure, and analyze your resource
            management information and practices to use your talent effectively
            and streamline resource deployment.
          </p>
        </Section>

        <Section>
          <SectionTitle>Vendor Management</SectionTitle>
          <p>
            WWS has the experience to manage and work on your behalf with
            vendors to ensure contractual obligations and conditions are met.
          </p>
        </Section>

        <Section>
          <SectionTitle>Portfolio</SectionTitle>
          <p>
            Portfolio is an element of demand management that is used to
            forecast, plan, and manage the demand for products and services.
            Defined set of processes, capabilities, and behaviors for managing
            resources utilized in a project.
          </p>
        </Section>
      </Content>
    </Container>
  );
};

export default Page12;
