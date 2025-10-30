import { useNavigate } from 'react-router';
import back from '../assets/images/back.svg';
import { styled } from 'styled-components';

const Back = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 1000;
`;

export const BackButton = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return <Back src={back} alt="back" onClick={handleBackButtonClick} />;
};
