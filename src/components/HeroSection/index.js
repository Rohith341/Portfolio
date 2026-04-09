import React, { useState, useEffect } from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, BackgroundText } from './HeroStyle'
import HeroImg from '../../images/Rohith.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const roleColors = [
    '#FF6B6B', // Red for Computer Science Student
    '#4ECDC4', // Teal for Full Stack Developer  
    '#45B7D1', // Blue for AI & ML Enthusiast
    '#96CEB4', // Green for Creative Problem Solver
];

const HeroSection = () => {
    const [, setCurrentRoleIndex] = useState(0);
    const [currentColor, setCurrentColor] = useState(roleColors[0]);

    useEffect(() => {
        // Synchronize color with typewriter effect
        const typewriterTiming = 2000; // Approximate time per role in typewriter
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % Bio.roles.length;
                setCurrentColor(roleColors[newIndex]);
                return newIndex;
            });
        }, typewriterTiming);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>

                {/* Background text container */}
                <BackgroundText>
                    Eat(); <br />Sleep();<br></br> Code(); <br /> Repeat();<br/>
                </BackgroundText>

                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            <b>a </b>
                            <Span currentColor={currentColor}>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle><br />{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="display">Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default HeroSection;
