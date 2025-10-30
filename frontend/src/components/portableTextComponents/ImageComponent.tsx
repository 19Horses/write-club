import { getImageDimensions } from '@sanity/asset-utils';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { builder } from '../sanityIntegration';
import { AnimatedBlock, Image, Caption } from './EssayContent';

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
