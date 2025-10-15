import React from 'react';
import { Link } from 'react-router';
import { styled } from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
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
`;

export const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/niche">What&apos;s your Niche?</StyledLink>
      <StyledLink to="/tube-thoughts">Tube Thoughts</StyledLink>
      <StyledLink to="/write-club">Write Club</StyledLink>
      <StyledLink to="/in-conversation">In Conversation</StyledLink>
    </StyledNav>
  );
};
