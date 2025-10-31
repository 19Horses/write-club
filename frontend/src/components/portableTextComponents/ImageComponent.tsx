import { getImageDimensions } from '@sanity/asset-utils';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { builder } from '../../sanityIntegration';
import { styled } from 'styled-components';
import { AnimatedBlock } from '../../styling/styles';

export const Caption = styled.p`
  font-size: 12px;
  color: #df1212;
  margin-top: 4px;
`;

export const Image = styled.img<{ $width: number; $height: number }>`
  display: block;
  max-width: 100%;
  aspect-ratio: ${({ $width, $height }) => $width / $height};

  &::selection {
    background-color: transparent;
  }
`;

export const ImageComponent = ({
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
      {value.caption && <Caption>{value.caption}</Caption>}
    </AnimatedBlock>
  );
};
