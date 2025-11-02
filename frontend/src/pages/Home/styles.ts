import { css, keyframes, styled } from 'styled-components';

export const fadeInImage = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 10px));
  }
  to {
    opacity: 0.7;
    transform: translate(-50%, -50%);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 10px));
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const MainTitleContainer = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;

  ${({ $isMobile }) =>
    $isMobile &&
    css`
      width: 100%;
    `}
`;

const slideToTop = keyframes`
  from {
    top: 50%;
  }
  to {
    top: 10%;
  }
`;

export const Image = styled.img<{ $isMobile: boolean }>`
  opacity: 0.7;
  animation: ${fadeInImage} 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ $isMobile }) =>
    $isMobile &&
    css`
      width: 8rem;
      top: 10%;
    `}

  &::selection {
    background-color: transparent;
  }
`;

export const Title = styled.h1<{ $isMobile?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ $isMobile }) => ($isMobile ? '48px' : '68px')};
  font-family: 'League';
  color: #e42121;
  margin-top: -1px;
  animation: ${fadeIn} 0.6s ease-in-out;
  &::selection {
    background-color: #df1212;
    color: white;
  }
  ${({ $isMobile }) =>
    $isMobile &&
    css`
      top: 10%;
    `}
`;

export const Subtitle = styled.h2<{ $isMobile?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ $isMobile }) => ($isMobile ? '32px' : '52px')};
  font-family: 'Luxury';
  color: #e42121;
  animation: ${fadeIn} 0.7s ease-in-out;
  &::selection {
    background-color: #df1212;
    color: white;
  }
  ${({ $isMobile }) =>
    $isMobile &&
    css`
      top: 10%;
    `}
`;
