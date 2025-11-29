import React from 'react';
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
  marks: {
    em: ({ children }: { children: React.ReactNode }) => <em>{children}</em>,
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong>{children}</strong>
    ),
  },
};

export const EssayContent = ({ content }: EssayContentProps) => {
  return <PortableText value={content} components={components} />;
};
