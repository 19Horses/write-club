import { useEffect, useMemo, useRef, useState } from 'react';
import { PortableText, type PortableTextBlock } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import { keyframes, styled } from 'styled-components';
import { BodyText } from '../styling/styles';
import { builder } from '../sanityIntegration';

interface EssayContentProps {
  content: PortableTextBlock[];
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBlock = styled.div<{ $isVisible: boolean }>`
  opacity: 0;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 0.6s ease-out
    forwards;
`;

const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const observerOptions = useMemo(
    () => ({
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [observerOptions]);

  return { ref, isVisible };
};

const BlockComponent = ({ value }: { value: PortableTextBlock }) => {
  const text = value.children[0].text;
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <AnimatedBlock ref={ref} $isVisible={isVisible}>
      <BodyText>{text}</BodyText>
    </AnimatedBlock>
  );
};

const Image = styled.img<{ $width: number; $height: number }>`
  display: block;
  max-width: 100%;
  aspect-ratio: ${({ $width, $height }) => $width / $height};
`;

const SampleImageComponent = ({
  value,
}: {
  value: { asset: { url: string }; alt: string; caption: string };
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(value);
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <AnimatedBlock ref={ref} $isVisible={isVisible}>
      <Image
        src={builder.image(value).fit('max').auto('format').url()}
        alt={value.alt || ' '}
        loading="lazy"
        $width={width}
        $height={height}
      />
    </AnimatedBlock>
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    block: BlockComponent,
  },
};

export const EssayContent = ({ content }: EssayContentProps) => {
  return <PortableText value={content} components={components} />;
};
