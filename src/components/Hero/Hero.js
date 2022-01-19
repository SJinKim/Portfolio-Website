import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, <br />
        I'm Jin and <br />
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>I'm developing websites and apps</SectionText>
      <Button onClick={() => (window.location = 'https://github.com/SJinKim')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
