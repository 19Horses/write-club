import { styled } from 'styled-components';
import cross from '../assets/images/cross.svg';
import { useNavigate } from 'react-router';
import { fadeIn } from '../styling/animations';

const Text = styled.p`
  font-family: 'Luxury';
  font-size: 80px;
  margin: 0;
  color: #df1212;
  text-align: center;
  width: 100%;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
`;

const Cross = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 8px;
  animation: ${fadeIn} 0.4s ease-in-out;
`;

export const Header = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const handleCrossClick = () => {
    navigate('/');
  };
  return (
    <StyledHeader>
      <Text>{title}</Text>
      <Cross src={cross} alt="cross" onClick={handleCrossClick} />
    </StyledHeader>
  );
};
