import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, <br />
        I'm Jin and <br />
        Welcome to <br />
        My Personal Webpage
      </SectionTitle>
      <SectionText>I build interactive websites and applications</SectionText>
      <Button onClick={() => (window.location = 'https://github.com/SJinKim')}>To my Github</Button>
    </LeftSection>
  </Section>
)

export default Hero
