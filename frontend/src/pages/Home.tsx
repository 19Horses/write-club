import { styled } from 'styled-components';
import mainImage from '.././assets/images/write-club.webp';

const MainTitleContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 68px;
  font-family: 'League';
  color: #e42121;
  margin-top: -1px;
`;

const Subtitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 52px;
  font-family: 'Luxury';
  color: #e42121;
`;

function Home() {
  return (
    <MainTitleContainer>
      <img style={{ opacity: 0.7 }} src={mainImage} alt="pomegranate" />
      <Title>WRITE</Title>
      <Subtitle>CLUB</Subtitle>
    </MainTitleContainer>
  );
}

export default Home;
