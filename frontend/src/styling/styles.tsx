import { styled } from 'styled-components';

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
