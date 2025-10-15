import React from 'react';
import { Link } from 'react-router';

export const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/niche">Niche</Link>
      <Link to="/tube-thoughts">Tube Thoughts</Link>
      <Link to="/write-club">Write Club</Link>
      <Link to="/in-conversation">In Conversation</Link>
    </nav>
  );
};
