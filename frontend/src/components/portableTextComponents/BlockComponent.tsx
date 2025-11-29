import React from 'react';
import type { PortableTextBlock } from '@portabletext/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { AnimatedBlock, BodyText } from '../../styling/styles';

const renderTextWithMarks = (
  text: string,
  marks: string[] = []
): React.ReactNode => {
  let content: React.ReactNode = text;

  // Apply marks in reverse order to maintain proper nesting
  marks.reverse().forEach((mark) => {
    switch (mark) {
      case 'em':
        console.log(mark);
        content = <em>{content}</em>;
        break;
      case 'strong':
        content = <strong>{content}</strong>;
        break;
      default:
        break;
    }
  });

  return content;
};

export const BlockComponent = ({ value }: { value: PortableTextBlock }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <>
      {value.children.map((child, index) => (
        <AnimatedBlock
          key={`${child.text}-${index}`}
          ref={ref}
          $isVisible={isVisible}
        >
          <BodyText>{renderTextWithMarks(child.text, child.marks)}</BodyText>
        </AnimatedBlock>
      ))}
    </>
  );
};
