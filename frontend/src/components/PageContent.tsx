import { PortableText, type PortableTextBlock } from '@portabletext/react';
import { BlockComponent } from './portableTextComponents';

interface PageContentProps {
  content: PortableTextBlock[];
}

const components = {
  types: {
    block: BlockComponent,
  },
};

export const PageContent = ({ content }: PageContentProps) => {
  return <PortableText value={content} components={components} />;
};
