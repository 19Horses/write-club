import { PortableText, type PortableTextBlock } from '@portabletext/react';
import { BlockComponent, ImageComponent } from './portableTextComponents';

interface EssayContentProps {
  content: PortableTextBlock[];
}

const components = {
  types: {
    image: ImageComponent,
    block: BlockComponent,
  },
};

export const EssayContent = ({ content }: EssayContentProps) => {
  console.log(content);
  return <PortableText value={content} components={components} />;
};
