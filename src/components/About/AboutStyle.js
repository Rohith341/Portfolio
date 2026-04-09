import styled from 'styled-components';
import _default from '../../themes/default';

export const AboutContainer = styled.div`
  padding: 80px 30px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'JetBrains Mono', 'Fira Code', 'Space Grotesk', monospace;
  letter-spacing: -0.03em;
  line-height: 1.0;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.primary} 0%, 
    ${({ theme }) => theme.primary + 80} 25%, 
    ${({ theme }) => theme.secondary || theme.primary} 50%,
    ${({ theme }) => theme.primary + 60} 75%,
    ${({ theme }) => theme.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  text-transform: uppercase;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, 
      transparent, 
      ${({ theme }) => theme.primary}, 
      transparent);
    border-radius: 2px;
    animation: shimmer 3s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
  
  @keyframes shimmer {
    0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(0.8); }
    50% { opacity: 1; transform: translateX(-50%) scaleX(1); }
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }
`;

export const AboutSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 2.5rem;
  text-align: center;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.4;
  position: relative;
  display: inline-block;
  
  &::before {
    content: '✨';
    margin-right: 8px;
    animation: sparkle 2s infinite;
  }
  
  &::after {
    content: '✨';
    margin-left: 8px;
    animation: sparkle 2s infinite 0.5s;
  }
  
  @keyframes sparkle {
    0%, 100% { opacity: 0.4; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const AboutText = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const AboutDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.9;
  margin-bottom: 2.5rem;
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-align: justify;
  position: relative;
  padding: 20px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.card_light} 0%, 
    ${({ theme }) => theme.card_light + 80} 100%);
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.primary + 20};
  
  &::first-letter {
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    float: left;
    line-height: 1;
    margin-right: 8px;
    margin-top: -8px;
    text-shadow: 0 2px 10px ${({ theme }) => theme.primary + 40};
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.8;
    padding: 16px;
    
    &::first-letter {
      font-size: 2.5rem;
    }
  }
`;

export const AboutImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 30px;
  object-fit: cover;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
              0 0 0 8px ${({ theme }) => theme.primary + 20},
              0 0 0 4px ${({ theme }) => theme.primary};
  border: 4px solid ${({ theme }) => theme.primary};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.secondary || theme.primary}, 
      ${({ theme }) => theme.primary});
    border-radius: 30px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: scale(1.08) rotate(2deg);
    box-shadow: 0 35px 70px rgba(0, 0, 0, 0.2),
                0 0 0 12px ${({ theme }) => theme.primary + 30},
                0 0 0 6px ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2.5rem;
  padding: 20px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.card_light + 20} 0%, 
    ${({ theme }) => theme.card_light + 40} 100%);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary + 15};
  
  @media (max-width: 768px) {
    padding: 16px;
    gap: 1rem;
  }
`;

export const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.card_light} 0%, 
    ${({ theme }) => theme.card_light + 80} 100%);
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.4rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid ${({ theme }) => theme.primary + 40};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.primary} 0%, 
      ${({ theme }) => theme.secondary || theme.primary} 100%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    z-index: 0;
  }
  
  & > * {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    color: white;
    transform: translateY(-5px) scale(1.1);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 15px 30px ${({ theme }) => theme.primary + 40};
  }
  
  &:hover > * {
    transform: scale(1.2);
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.card_light + 40} 0%, 
    ${({ theme }) => theme.card_light + 60} 100%);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary + 20};
  
  @media (max-width: 768px) {
    padding: 16px;
    gap: 0.8rem;
  }
`;

export const SkillTag = styled.span`
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.primary} 0%, 
    ${({ theme }) => theme.primary + 80} 50%, 
    ${({ theme }) => theme.secondary || theme.primary} 100%);
  color: white;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.3), 
      transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px ${({ theme }) => theme.primary + 50},
                0 4px 15px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1) saturate(1.1);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
`;