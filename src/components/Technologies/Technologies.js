import React from 'react'
import { DiFirebase, DiReact, DiJava } from 'react-icons/di'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technology</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From Back-end to Front-End.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React, React-Native, Next, HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Middleware, Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node, Express, Python (Flask), MySql and Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size='3rem' />
        <ListContainer>
          <ListTitle>other stacks</ListTitle>
          <ListParagraph>
            Experience with <br /> Java, Python, Docker and VBA
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
