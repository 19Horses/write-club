import { styled } from 'styled-components';
import cross from '../assets/images/cross.svg';
import back from '../assets/images/back.svg';
import { useNavigate } from 'react-router';
import { fadeIn } from '../styling/animations';

const Text = styled.p`
  font-family: 'Luxury';
  font-size: 80px;
  margin: 0;
  color: #df1212;
  text-align: center;
  width: 100%;

  &::selection {
    background-color: #df1212;
    color: white;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 4px;
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
}: {
  title: string;
  withBackButton?: boolean;
}) => {
  const navigate = useNavigate();
  const handleCrossClick = () => {
    navigate('/');
  };
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <StyledHeader>
      {withBackButton && (
        <Back src={back} alt="back" onClick={handleBackButtonClick} />
      )}
      <Text>{title}</Text>
      {!withBackButton && (
        <Cross src={cross} alt="cross" onClick={handleCrossClick} />
      )}
    </StyledHeader>
  );
};
