import React from 'react';
import { styled } from 'styled-components';
import { fadeIn } from '../styling/animations';
import { MOBILE_BREAKPOINT } from '../constants';

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 100px 100px 100px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0px 20px 20px 20px;
  }
`;

const AnimatedChild = styled.div<{ $delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  animation-delay: ${({ $delay }) => $delay}s;

  &:last-of-type {
    height: 100%;
  }
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <AnimatedChild key={index} $delay={index * 0.1}>
              {child}
            </AnimatedChild>
          );
        }
        return child;
      })}
    </Container>
  );
};
