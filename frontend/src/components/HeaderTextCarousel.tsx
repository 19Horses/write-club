import { Star } from '../styling/styles';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_BREAKPOINT } from '../constants';

const pageTitles = [
  'About',
  'Starry Nights',
  "What's your Niche?",
  'Write Club',
];

const links = {
  About: '/about',
  'Starry Nights': '/starry-nights',
  "What's your Niche?": '/niche',
  'Write Club': '/write-club',
};

const Text = styled.p<{ $isMobile: boolean }>`
  font-family: 'Luxury';
  font-size: ${({ $isMobile }) => ($isMobile ? '60px' : '80px')};
  margin: 0;
  color: #df1212;
  text-align: ${({ $isMobile }) => ($isMobile ? 'left' : 'center')};

  &::selection {
    background-color: #df1212;
    color: white;
  }
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SideText = styled(Text)`
  font-size: 45px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const HeaderTextCarousel = ({
  currentText,
  withStar = false,
}: {
  currentText: string;
  withStar?: boolean;
}) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${MOBILE_BREAKPOINT}px)`,
  });
  const navigate = useNavigate();
  const currentTextIndex = pageTitles.indexOf(currentText);
  const nextText = pageTitles[currentTextIndex + 1] || pageTitles[0];
  const previousText =
    pageTitles[currentTextIndex - 1] || pageTitles[pageTitles.length - 1];
  const handleTextClick = (text: string) => {
    const link = links[text as keyof typeof links];
    if (link) {
      navigate(link);
    }
  };

  if (isMobile) {
    return (
      <div style={{ position: 'relative' }}>
        {withStar && <Star $top={5} $left={10} $rotate={-10} alt="star" />}
        <Text $isMobile={isMobile}>{currentText}</Text>
        {withStar && <Star $rotate={-8} $right={-10} $bottom={5} alt="star" />}
      </div>
    );
  }
  return (
    <Container>
      <SideText
        $isMobile={isMobile}
        onClick={() => handleTextClick(previousText)}
      >
        {previousText}
      </SideText>
      <div style={{ position: 'relative' }}>
        {withStar && <Star $top={5} $left={10} $rotate={-10} alt="star" />}
        <Text $isMobile={isMobile}>{currentText}</Text>
        {withStar && <Star $rotate={-8} $right={-10} $bottom={5} alt="star" />}
      </div>
      <SideText $isMobile={isMobile} onClick={() => handleTextClick(nextText)}>
        {nextText}
      </SideText>
    </Container>
  );
};
