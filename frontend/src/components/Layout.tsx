import React from 'react';
import { styled } from 'styled-components';
import { fadeIn } from '../styling/animations';

const Container = styled.div`
  width: 100%;
  /* height: calc(100% - 100px); */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 100px 100px 100px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  @media (max-width: 900px) {
    padding: 0px 20px;
  }
`;

const AnimatedChild = styled.div<{ $delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  animation-delay: ${({ $delay }) => $delay}s;
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
