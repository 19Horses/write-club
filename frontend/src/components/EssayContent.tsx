import { PortableText, type PortableTextBlock } from '@portabletext/react';
import { styled } from 'styled-components';
import { fadeIn } from '../styling/animations';
import { BlockComponent, ImageComponent } from './portableTextComponents';

interface EssayContentProps {
  content: PortableTextBlock[];
}

export const AnimatedBlock = styled.div<{ $isVisible: boolean }>`
  opacity: 0;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 0.6s ease-out
    forwards;
`;

export const Caption = styled.p`
  font-size: 12px;
  color: #df1212;
  margin-top: 4px;
`;

export const Image = styled.img<{ $width: number; $height: number }>`
  display: block;
  max-width: 100%;
  aspect-ratio: ${({ $width, $height }) => $width / $height};
`;

const components = {
  types: {
    image: ImageComponent,
    block: BlockComponent,
  },
};

export const EssayContent = ({ content }: EssayContentProps) => {
  return <PortableText value={content} components={components} />;
};
