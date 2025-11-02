import { css, styled } from 'styled-components';
import { fadeIn, fadeOut } from './animations';
import star from '../assets/images/star.webp';

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

export const Star = styled.img.attrs({
  src: star,
})<{
  $top?: number;
  $left?: number;
  $rotate?: number;
  $right?: number;
  $bottom?: number;
  $width?: number;
  $height?: number;
}>`
  width: ${({ $width }) => ($width ? `${$width}px` : '40px')};
  height: ${({ $height }) => ($height ? `${$height}px` : '40px')};
  position: absolute;
  top: ${({ $top }) => ($top ? `${$top}px` : 'auto')};
  left: ${({ $left }) => ($left ? `${$left}px` : 'auto')};
  z-index: -1;
  rotate: ${({ $rotate }) => ($rotate ? $rotate : '0')}deg;
  right: ${({ $right }) => ($right ? `${$right}px` : 'auto')};
  bottom: ${({ $bottom }) => ($bottom ? `${$bottom}px` : 'auto')};
`;

export const Arrow = styled.img`
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
  opacity: 0;
  margin-left: -20px;
  transition: all 0.3s ease-in-out;
`;

export const Link = styled.a<{ $isOpen: boolean; $animationDelay: number }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  text-decoration: none;
  color: #df1212;
  transition: transform 0.2s ease-in-out;
  animation-delay: ${({ $animationDelay }) => `${$animationDelay}s`};
  animation-fill-mode: forwards;
  animation: ${({ $isOpen }) =>
    $isOpen
      ? css`
          ${fadeIn} 0.2s ease-in-out
        `
      : css`
          ${fadeOut} 0.2s ease-in-out
        `};
  &:hover {
    transform: translateX(3px);

    ${Arrow} {
      opacity: 1;
      margin-left: 0px;
      margin-right: 8px;
    }
  }
`;
