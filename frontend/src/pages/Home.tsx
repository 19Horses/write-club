import { keyframes, styled } from 'styled-components';
import mainImage from '.././assets/images/write-club.webp';

export const fadeInImage = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 10px));
  }
  to {
    opacity: 0.7;
    transform: translate(-50%, -50%);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 10px));
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const MainTitleContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  opacity: 0.7;
  animation: ${fadeInImage} 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  animation: ${fadeIn} 0.6s ease-in-out;
`;

const Subtitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 52px;
  font-family: 'Luxury';
  color: #e42121;
  animation: ${fadeIn} 0.7s ease-in-out;
`;

function Home() {
  return (
    <MainTitleContainer>
      <Image src={mainImage} alt="pomegranate" />
      <Title>WRITE</Title>
      <Subtitle>CLUB</Subtitle>
    </MainTitleContainer>
  );
}

export default Home;
