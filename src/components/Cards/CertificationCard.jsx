import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 180px; /* Reduced width */
  height: 280px; /* Reduced height */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(255, 4, 4, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(205, 28, 28, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 70%; /* Adjusted to fit within new dimensions */
  object-fit: contain;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
`;

const CardContent = styled.div`
  padding: 10px 12px; /* Reduced padding */
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 0.85rem; /* Reduced font size */
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

const CardCaption = styled.p`
  font-size: 0.6rem; /* Reduced font size */
  color: #555;
  margin-bottom: 10px;
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
