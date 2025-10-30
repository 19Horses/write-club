import { styled } from 'styled-components';
import { InterviewTurn } from '../queries/useGetInterviews';
import { BodyTextTiny } from '../styling/styles';
import { InterviewContent } from './InterviewContent';

const TranscriptSectionContainer = styled.div`
  position: relative;
  gap: 4px;
  padding-left: 40px;
`;

const Initials = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
`;

export const TranscriptSection = ({ initials, text }: InterviewTurn) => {
  return (
    <TranscriptSectionContainer>
      <Initials>
        <BodyTextTiny>{initials}</BodyTextTiny>
      </Initials>
      <InterviewContent content={text} />
    </TranscriptSectionContainer>
  );
};
