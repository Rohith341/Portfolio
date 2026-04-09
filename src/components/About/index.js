import React from 'react';
import { Bio } from '../../data/constants';
import {
  AboutContainer,
  AboutTitle,
  AboutSubtitle,
  AboutContent,
  AboutText,
  AboutDescription,
  AboutImage,
  ProfileImage,
  SocialMediaIcons,
  SocialMediaIcon,
  SkillsContainer,
  SkillTag
} from './AboutStyle';

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutSubtitle>{Bio.roles[0]}</AboutSubtitle>
      
      <AboutContent>
        <AboutText>
          <AboutDescription>
            {Bio.description}
          </AboutDescription>
          
          <SkillsContainer>
            <SkillTag>Full Stack Developer</SkillTag>
            <SkillTag>Machine Learning</SkillTag>
            <SkillTag>Blockchain</SkillTag>
            <SkillTag>IoT</SkillTag>
            <SkillTag>React.js</SkillTag>
            <SkillTag>Python</SkillTag>
            <SkillTag>Node.js</SkillTag>
            <SkillTag>Problem Solving</SkillTag>
          </SkillsContainer>
          
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.insta} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.leetcode} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i>
            </SocialMediaIcon>
          </SocialMediaIcons>
        </AboutText>
        
        <AboutImage>
          <ProfileImage src="/Rohith.jpg" alt={Bio.name} />
        </AboutImage>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;