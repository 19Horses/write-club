import type { PortableTextBlock } from '@portabletext/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { AnimatedBlock, BodyText } from '../../styling/styles';

export const TranscriptComponent = ({
  value,
}: {
  value: PortableTextBlock;
}) => {
  const text = value.children[0].text;
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <AnimatedBlock ref={ref} $isVisible={isVisible}>
      <BodyText>{text}</BodyText>
    </AnimatedBlock>
  );
};
