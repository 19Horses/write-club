import type { PortableTextBlock } from '@portabletext/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { AnimatedBlock, BodyText } from '../../styling/styles';

export const BlockComponent = ({ value }: { value: PortableTextBlock }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <>
      {value.children.map((child) => (
        <AnimatedBlock key={child.text} ref={ref} $isVisible={isVisible}>
          <BodyText>{child.text}</BodyText>
        </AnimatedBlock>
      ))}
    </>
  );
};
