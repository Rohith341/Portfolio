import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 340px;
  max-height: 340px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 0 4px ${({ theme }) => theme.primary + 20},
              0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 0 0 6px ${({ theme }) => theme.primary + 30},
                0 25px 50px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.primary + 80};
  }

  @media (max-width: 768px) {
    max-width: 320px;
    max-height: 320px;
  }

  @media (max-width: 640px) {
    max-width: 260px;
    max-height: 260px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 48px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  letter-spacing: -1px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary + 80});
    border-radius: 2px;
  }
  
  @media (max-width: 960px) {
    text-align: center;
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 640px) {
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.3px;
  align-items: center;
  margin: 20px 0;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }
  
  @media (max-width: 960px) {
    justify-content: center;
    text-align: center;
  }
  
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 1.4;
    margin-bottom: 20px;
    gap: 12px;
  }
`;

export const Span = styled.span`
  color: ${({ currentColor, theme }) => currentColor || theme.primary};
  cursor: pointer;
  font-weight: 800;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 0 25px ${({ currentColor }) => currentColor ? `${currentColor}60` : 'transparent'},
               0 0 50px ${({ currentColor }) => currentColor ? `${currentColor}30` : 'transparent'};
  position: relative;
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 0.5px;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, ${({ currentColor }) => currentColor || 'transparent'}, transparent, ${({ currentColor }) => currentColor || 'transparent'});
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.6s ease;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${({ currentColor }) => currentColor || 'currentColor'}, ${({ currentColor }) => currentColor ? `${currentColor}80` : 'currentColor'});
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::before {
    opacity: 0.3;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    filter: brightness(1.3) saturate(1.2);
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 1.6;
  margin: 24px 0 32px 0;
  color: ${({ theme }) => theme.text_secondary};
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 300;
  letter-spacing: 0.2px;
  max-width: 600px;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, ${({ theme }) => theme.primary}, transparent);
    border-radius: 2px;
  }

  @media (max-width: 960px) {
    text-align: center;
    padding-left: 0;
    max-width: 500px;
    margin: 24px auto 32px auto;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      top: auto;
      bottom: -12px;
      background: linear-gradient(90deg, transparent, ${({ theme }) => theme.primary}, transparent);
    }
  }

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 1.7;
    margin: 20px auto 28px auto;
  }
`;
export const BackgroundText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-5deg);
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 42px;
  font-weight: 900;
  color: ${({ theme }) => theme.primary + 15};
  text-align: center;
  z-index: -1;
  line-height: 1.1;
  letter-spacing: 6px;
  text-transform: uppercase;
  white-space: pre-line;
  opacity: 0.8;
  filter: blur(0.5px);
  
  &::selection {
    background: ${({ theme }) => theme.primary + 30};
  }

  @media (max-width: 960px) {
    font-size: 48px;
    letter-spacing: 4px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
    letter-spacing: 3px;
    transform: translate(-50%, -50%) rotate(-3deg);
  }
`;


export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  padding: 16px;
  
  @media (max-width: 640px) {
    gap: 12px;
    margin-top: 24px;
    padding: 12px;
  }
`;

export const SocialMediaIcon = styled.a`
  display: inline-flex;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid ${({ theme }) => theme.primary + 30};
  font-size: 18px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    z-index: 0;
  }
  
  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    color: ${({ theme }) => theme.white};
    transform: translateY(-4px) scale(1.1);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 25px ${({ theme }) => theme.primary + 40};
  }
  
  &:active {
    transform: translateY(-2px) scale(1.05);
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 280px;
  text-align: center;
  padding: 16px 24px;
  color: ${({ theme }) => theme.white};
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primary + 80} 50%, ${({ theme }) => theme.primary + 60} 100%);
  box-shadow: 0 10px 30px ${({ theme }) => theme.primary + 40},
              0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 40px ${({ theme }) => theme.primary + 50},
                0 6px 20px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1) saturate(1.1);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }

  @media (max-width: 640px) {
    padding: 14px 20px;
    font-size: 16px;
    max-width: 240px;
  }
`;
