import React from 'react';
import { Link } from 'react-router';
import { styled } from 'styled-components';
import { fadeIn } from '../styling/animations';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)<{ $delay: number }>`
  text-decoration: none;
  font-family: 'Luxury';
  font-size: 2rem;
  color: #df1212;
  width: 14%;
  height: 60px;
  border: 1px solid #df1212;
  padding: 16px;
  border-radius: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;

  animation: ${fadeIn} 0.3s ease-in-out forwards;
  animation-delay: ${({ $delay }) => $delay}s;

  &::selection {
    background-color: #df1212;
    color: white;
  }
`;

export const Nav = () => {
  const links = [
    { to: '/about', label: 'About' },
    { to: '/starry-nights', label: 'Starry Nights' },
    { to: '/niche', label: "What's your Niche?" },
    { to: '/write-club', label: 'Write Club' },
    // { to: '/in-conversation', label: 'In Conversation' },
  ];

  return (
    <StyledNav>
      {links.map((link, index) => (
        <StyledLink key={link.to} to={link.to} $delay={index * 0.1}>
          {link.label}
        </StyledLink>
      ))}
    </StyledNav>
  );
};
