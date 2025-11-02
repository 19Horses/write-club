import { styled } from 'styled-components';
import cross from '../assets/images/cross.svg';
import back from '../assets/images/back.svg';
import { useNavigate } from 'react-router';
import { fadeIn } from '../styling/animations';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_BREAKPOINT } from '../constants';
import star from '../assets/images/star.webp';
import { Star } from '../styling/styles';

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

const StyledHeader = styled.header<{ $isMobile: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $isMobile }) => ($isMobile ? 'flex-start' : 'center')};
  padding: ${({ $isMobile }) => ($isMobile ? '16px' : '4px')};
  box-sizing: border-box;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

const Cross = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 8px;

  &::selection {
    background-color: white;
  }
`;

const Back = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 10px;
`;

export const Header = ({
  title,
  withBackButton = false,
  withStar = false,
}: {
  title: string;
  withBackButton?: boolean;
  withStar?: boolean;
}) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${MOBILE_BREAKPOINT}px)`,
  });
  const navigate = useNavigate();
  const handleCrossClick = () => {
    navigate('/');
  };
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <StyledHeader $isMobile={isMobile}>
      {withBackButton && (
        <Back src={back} alt="back" onClick={handleBackButtonClick} />
      )}
      <div style={{ position: 'relative' }}>
        {withStar && (
          <Star $top={5} $left={10} $rotate={-10} src={star} alt="star" />
        )}
        <Text $isMobile={isMobile}>{title}</Text>
        {withStar && (
          <Star $rotate={-8} $right={-10} $bottom={5} src={star} alt="star" />
        )}
      </div>
      {!withBackButton && (
        <Cross src={cross} alt="cross" onClick={handleCrossClick} />
      )}
    </StyledHeader>
  );
};
