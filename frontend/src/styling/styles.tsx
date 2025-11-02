import { styled } from 'styled-components';
import { fadeIn } from './animations';

export const BodyText = styled.p`
  font-family: 'League';
  font-size: 20px;
  color: #df1212;
  text-align: justify;

  &::selection {
    background-color: #df1212;
    color: white;
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ItemButton = styled.button`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 4px;
  border: 1px solid #df1212;
  padding: 10px;
  font: 'League';
  cursor: pointer;
  background-color: white;
  transition: all 0.2s ease 0.1s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Button = styled.button`
  font-family: 'League';
  font-size: 14px;
  color: white;
  text-align: center;
  background-color: #df1212;
  padding: 10px 20px;
  min-width: 300px;
  border-radius: 8px;
  border: 1px solid #df1212;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: white;
    color: #df1212;
    border: 1px solid #df1212;

    & > a {
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      color: #df1212;
    }
  }

  &::selection {
    background-color: #df1212;
  }

  & > a {
    text-decoration: none;
    color: white;
  }
`;

export const BodyTextSmall = styled.p`
  font-size: 16px;
  color: #df1212;
  margin: 0;

  &::selection {
    background-color: #df1212;
    color: white;
  }
`;

export const BodyTextTiny = styled.p`
  font-size: 14px;
  color: #df1212;
  margin: 0;

  &::selection {
    background-color: #df1212;
    color: white;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  font-family: 'League';
  color: #df1212;
  margin: 0;

  &::selection {
    background-color: #df1212;
    color: white;
  }
`;
export const AnimatedBlock = styled.div<{ $isVisible: boolean }>`
  opacity: 0;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 0.6s ease-out
    forwards;
`;

export const Buffer = styled.div`
  padding-top: 20px;
`;
