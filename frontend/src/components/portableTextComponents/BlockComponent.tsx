import type { PortableTextBlock } from '@portabletext/react';
import { BodyText } from '../styling/styles';
import { useIntersectionObserver, AnimatedBlock } from './EssayContent';

export const BlockComponent = ({ value }: { value: PortableTextBlock }) => {
  const text = value.children[0].text;
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <AnimatedBlock ref={ref} $isVisible={isVisible}>
      <BodyText>{text}</BodyText>
    </AnimatedBlock>
  );
};
