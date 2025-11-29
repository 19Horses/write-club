import React from 'react';
import { PortableText, type PortableTextBlock } from '@portabletext/react';
import { BlockComponent } from './portableTextComponents';

interface PageContentProps {
  content: PortableTextBlock[];
}

const components = {
  types: {
    block: BlockComponent,
  },
  marks: {
    em: ({ children }: { children: React.ReactNode }) => <em>{children}</em>,
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong>{children}</strong>
    ),
  },
};

export const PageContent = ({ content }: PageContentProps) => {
  return <PortableText value={content} components={components} />;
};
