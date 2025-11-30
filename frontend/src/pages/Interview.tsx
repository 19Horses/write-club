import { Navigate, useParams } from 'react-router';
import { styled } from 'styled-components';
import { BackButton } from '../components/BackButton';
import { Layout } from '../components/Layout';
import { TranscriptSection } from '../components/TranscriptSection';
import { useGetInterview } from '../queries/useGetInterviews';
import {
  BodyTextSmall,
  BodyTextTiny,
  Buffer,
  ItemTitle,
} from '../styling/styles';
import { MOBILE_BREAKPOINT } from '../constants';

const EssayHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  text-align: left;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    text-align: right;
  }
`;

export const Interview = () => {
  const { interviewId } = useParams();

  if (!interviewId) {
    return <Navigate to="/niche" replace />;
  }

  const { data: interview, isError, isLoading } = useGetInterview(interviewId);

  if (isLoading) {
    return (
      <Layout>
        <BodyTextSmall>Loading...</BodyTextSmall>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <BodyTextSmall>Error loading interview</BodyTextSmall>
      </Layout>
    );
  }

  if (!interview) {
    return (
      <Layout>
        <BodyTextSmall>Interview not found</BodyTextSmall>
      </Layout>
    );
  }

  return (
    <>
      <Buffer />
      <BackButton />
      <Layout>
        <EssayHeader>
          <ItemTitle>{interview.title}</ItemTitle>
          <BodyTextSmall>{interview.intervieweeName}</BodyTextSmall>
          <BodyTextTiny>{interview.date}</BodyTextTiny>
        </EssayHeader>
        {interview.transcript.map((turn) => (
          <TranscriptSection
            key={turn.initials}
            initials={turn.initials}
            text={turn.text}
          />
        ))}
      </Layout>
    </>
  );
};
