import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { css, styled } from 'styled-components';
import { EssayCollectionType } from '../queries/useGetCollections';
import { BodyTextSmall, BodyTextTiny, ItemTitle } from '../styling/styles';
import { fadeIn, fadeOut } from '../styling/animations';
import arrow from '../assets/images/back.svg';

const Accordion = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  font: 'League';
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0px 20px 0px 20px;
  ${({ $isOpen }) =>
    $isOpen &&
    `
    padding: 0px 20px 20px 20px;
  `}
`;

const EssayListContainer = styled.div<{ $height: number }>`
  height: ${({ $height }) => `${$height}px`};
  overflow: hidden;
  transition: height 0.1s ease-in-out;
  width: 100%;
  text-align: left;
`;

const EssayList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const Arrow = styled.img`
  width: 30px;
  height: 30px;
  transform: rotate(180deg);
  opacity: 0;
  margin-left: -30px;
  transition: all 0.3s ease-in-out;
`;

const EssayLink = styled.a<{ $isOpen: boolean; $animationDelay: number }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
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
    transform: translateX(20px);

    ${Arrow} {
      opacity: 1;
      margin-left: 0px;
    }
  }
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

export const Collection = ({
  collection,
}: {
  collection: EssayCollectionType;
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLUListElement>(null);
  const essays = collection.essays;

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const contentHeight = contentRef.current.scrollHeight;
        setHeight(contentHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen, essays]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      if (contentHeight !== height) {
        setHeight(contentHeight);
      }
    }
  }, [essays, isOpen, height]);

  const handleEssayClick = (essayId: string) => {
    navigate(`/starry-nights/${essayId}`);
  };

  return (
    <Accordion key={collection._id} $isOpen={isOpen}>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        <ItemTitle>{collection.title}</ItemTitle>
      </AccordionHeader>
      <EssayListContainer $height={height}>
        <EssayList ref={contentRef}>
          {essays?.map((essay, index) => (
            <EssayLink
              key={essay._id}
              onClick={() => handleEssayClick(essay._id)}
              $isOpen={isOpen}
              $animationDelay={index * 0.1}
            >
              <Arrow src={arrow} />
              <ItemTitle>{essay.title}</ItemTitle>
              <BodyTextSmall>{essay.author}</BodyTextSmall>
              <BodyTextTiny>{essay.date}</BodyTextTiny>
            </EssayLink>
          ))}
        </EssayList>
      </EssayListContainer>
    </Accordion>
  );
};
