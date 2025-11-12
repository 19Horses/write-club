import { styled } from 'styled-components';
import { Star } from '../../styling/styles';

export const StarryNightStar = styled(Star)`
  width: 70%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
