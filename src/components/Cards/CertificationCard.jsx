import React from 'react';
import styled from 'styled-components';

const CardImage = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
`;

const Card = styled.div`
  width: 220px;
  height: 320px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.07),
    0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px 16px 0 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 8px 12px rgba(0, 0, 0, 0.15),
      0 20px 40px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    ${CardImage} {
      transform: scale(1.05);
      filter: brightness(1.1);
    }
  }

  &:active {
    transform: translateY(-4px) scale(0.98);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 280px;
  }
`;

const CardContent = styled.div`
  padding: 16px 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

const CardTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1a202c;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const CardCaption = styled.p`
  font-size: 0.75rem;
  color: #2d3748;
  margin-bottom: 12px;
  line-height: 1.4;
  font-weight: 500;
`;
const CertificationCard = ({ cert }) => {
  return (
    <Card onClick={() => window.open(cert.link, "_blank")}>
      <CardImage src={cert.image} alt={cert.title} />
      <CardContent>
        <CardTitle>{cert.title}</CardTitle>
        <CardCaption>{cert.caption}</CardCaption>
      </CardContent>
    </Card>
  );
}

export default CertificationCard;
