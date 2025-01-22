import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle';
import CertificationCard from '../Cards/CertificationCard';

export const certificates = [
  {
    id: 1,
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-3fc97634-fd32-418f-a089-c8bf1607bcd3.jpg?v=1710864709000",
    title: "Web Development Bootcamp - UDEMY",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-3fc97634-fd32-418f-a089-c8bf1607bcd3.jpg?v=1710864709000"
  },
  {
    id: 2,
    image: "https://media.licdn.com/dms/image/v2/D5622AQH4NC9Y53F0Tg/feedshare-shrink_1280/feedshare-shrink_1280/0/1702702920413?e=1740614400&v=beta&t=Soul7OGdDO0Hg5TmAaQK5TeSbRz6P1K7Z9OMej2K70k",
    title: "Introduction to AI & ML-INFOSYS SPRINGBOARD",
    link: "https://drive.google.com/file/d/1M1z9yXcOZs6gwE49FPMMTTreYhpzpWEj/view?usp=sharing"
  },
  {
    id: 3,
    image: "https://imagedelivery.net/L-RRwTsGtjw4XmStu9Y7XA/ad79920b-6d97-48f7-a186-0772a0c95a00/public",
    title: "Smart Coder - Smart Interviews",
    link: "https://smartinterviews.in/certificate/a1ea6874"
  },
  {
    id: 4,
    image: "https://media.licdn.com/dms/image/v2/D4E22AQHNsTVcQMwhew/feedshare-shrink_800/B4EZSKOf2vHMAk-/0/1737485844929?e=1740614400&v=beta&t=Z_J9rXPWdlL0urtskuySeaLbf_KlV00RM3zFxLiI3vk",
    title: "Cyber Security - Microsoft CyberSuraksha",
    link: "https://drive.google.com/file/d/1JJBK_XeE-ysMDES8CggOiQE7CabA80QD/view?usp=sharing"
  },
  {
    id: 5,
    image: "https://media.licdn.com/dms/image/v2/D4E22AQFSdSDK2LIzxA/feedshare-shrink_2048_1536/B4EZSKTqlfGwAo-/0/1737487199408?e=1740614400&v=beta&t=IfFOQXsf8tZ0hOjsllVHdnu61qwM3mr81vkGTwUNZe4",
    title: "Introduction to Data Science - INFOSYS",
    link: "https://drive.google.com/file/d/1S4v1JXSi-MyzSLX00DX1x6oEocP0b-cW/view?usp=sharing"
  }
];

const CertificationPage = () => {
  const [toggle] = useState('all');
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          Here are some of the certifications I have achieved across different domains.
        </Desc>
        <CardContainer>
          {certificates.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default CertificationPage;
