import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};
