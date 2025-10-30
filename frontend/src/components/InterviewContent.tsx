import { PortableText, type PortableTextBlock } from '@portabletext/react';
import { ImageComponent, TranscriptComponent } from './portableTextComponents';

interface InterviewContentProps {
  content: PortableTextBlock[];
}

const components = {
  types: {
    image: ImageComponent,
    block: TranscriptComponent,
  },
};

export const InterviewContent = ({ content }: InterviewContentProps) => {
  console.log(content);
  return <PortableText value={content} components={components} />;
};
