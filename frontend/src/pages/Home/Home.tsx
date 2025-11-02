import { Nav } from '../../components/Nav';
import mainImage from '../../assets/images/write-club.webp';
import { Image, MainTitleContainer, Subtitle, Title } from './styles';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_BREAKPOINT } from '../../constants';

export const Home = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${MOBILE_BREAKPOINT}px)`,
  });

  if (isMobile) {
    return (
      <>
        <MainTitleContainer $isMobile={isMobile}>
          <Image src={mainImage} alt="pomegranate" $isMobile={isMobile} />
          <Title $isMobile={isMobile}>WRITE</Title>
          <Subtitle $isMobile={isMobile}>CLUB</Subtitle>
          <Nav isMobile />
        </MainTitleContainer>
      </>
    );
  }

  return (
    <>
      <Nav />
      <MainTitleContainer $isMobile={isMobile}>
        <Image src={mainImage} alt="pomegranate" $isMobile={isMobile} />
        <Title $isMobile={isMobile}>WRITE</Title>
        <Subtitle $isMobile={isMobile}>CLUB</Subtitle>
      </MainTitleContainer>
    </>
  );
};
