import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { ThemeType } from '../queries/useGetThemes';
import { ItemTitle } from '../styling/styles';

const Accordion = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  font: 'League';
  border: none;
  outline: none;
  border: 1px solid #df1212;
  background-color: transparent;
  padding: 0px 20px 0px 20px;
  ${({ $isOpen }) =>
    $isOpen &&
    `
    padding: 0px 20px 20px 20px;
  `}
`;

const ListContainer = styled.div<{ $height: number }>`
  height: ${({ $height }) => `${$height}px`};
  overflow: hidden;
  transition: height 0.1s ease-in-out;
  width: 100%;
  text-align: left;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const AccordionHeader = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 20px 0px;
`;

const Prompt = styled(ItemTitle)`
  text-align: left;
`;

export const Theme = ({ theme }: { theme: ThemeType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLUListElement>(null);
  const prompts = theme.prompts;

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const contentHeight = contentRef.current.scrollHeight;
        setHeight(contentHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen, prompts]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      if (contentHeight !== height) {
        setHeight(contentHeight);
      }
    }
  }, [prompts, isOpen, height]);

  return (
    <Accordion key={theme._id} $isOpen={isOpen}>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        <ItemTitle>{theme.theme}</ItemTitle>
      </AccordionHeader>
      <ListContainer $height={height}>
        <List ref={contentRef}>
          {prompts?.map((prompt) => (
            <Prompt key={prompt}>{prompt}</Prompt>
          ))}
        </List>
      </ListContainer>
    </Accordion>
  );
};
