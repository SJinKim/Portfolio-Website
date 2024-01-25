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
      <SectionText>
        Armed with a profound understanding of agile development methods, I am driven to create innovative
        solutions while constantly striving for personal growth. My passion for clean code, coupled with
        analytical thinking, empowers me to craft efficient and scalable solutions. I am dedicated to pushing
        the boundaries of what is possible in the field of technology, and I embrace challenges as
        opportunities for continuous improvement. My journey in the realm of computer science is not just a
        pursuit of knowledge, but a commitment to shaping the future through cutting-edge, impactful
        contributions.
      </SectionText>
      <Button onClick={() => (window.location = 'https://github.com/SJinKim')}>To my Github</Button>
    </LeftSection>
  </Section>
)

export default Hero
