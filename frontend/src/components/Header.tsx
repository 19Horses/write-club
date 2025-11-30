import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import back from '../assets/images/back.svg';
import cross from '../assets/images/cross.svg';
import { MOBILE_BREAKPOINT } from '../constants';
import { fadeIn } from '../styling/animations';
import { HeaderTextCarousel } from './HeaderTextCarousel';

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
      <HeaderTextCarousel currentText={title} withStar={withStar} />
      {!withBackButton && (
        <Cross src={cross} alt="cross" onClick={handleCrossClick} />
      )}
    </StyledHeader>
  );
};
