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
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  color: #666;
  margin: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Page9 = () => {
  return (
    <Container>
      <Content>
        <Title>Network Assessment</Title>
        <p>
          A network assessment reviews your existing structure, and
          comprehensively assesses the organization’s productivity, performance,
          management, security, and processes, helping to determine what
          solutions best yield greater efficiency and functionality of the
          infrastructure and overall network. Our technicians identify any
          bottlenecks preventing your network from running at peak performance.
          We release a report which will identify areas of concern and provide
          the steps to improve the organization’s network performance and
          security.
        </p>

        <Section>
          <SectionTitle>
            Signs that indicate you should absolutely pursue a network
            assessment:
          </SectionTitle>
          <List>
            <ListItem>
              Your network is slow, sluggish, and temperamental
            </ListItem>
            <ListItem>Unusual amounts of viruses/malware</ListItem>
            <ListItem>Frustration in the ranks</ListItem>
            <ListItem>Upgrades/Expansion</ListItem>
            <ListItem>Anxiety about the future</ListItem>
            <ListItem>A desire to save money</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>What a network assessment does:</SectionTitle>
          <List>
            <ListItem>
              Identify areas where bandwidth is congested and provide relief.
            </ListItem>
            <ListItem>
              Fix any security holes that might threaten, weaken, or otherwise
              negatively impact your network operations.
            </ListItem>
            <ListItem>
              Review your network’s actual configuration, helping you maximize
              performance efficiency, and plan for future growth.
            </ListItem>
            <ListItem>
              Validation and effectiveness of data backup and restore operations
              – ensure that organizations data is securely stored and
              recoverable.
            </ListItem>
            <ListItem>
              Review the configuration of your network security devices and
              software to ensure all pertinent data and computer systems are
              protected from unwarranted access.
            </ListItem>
          </List>
        </Section>
      </Content>
    </Container>
  );
};

export default Page9;
