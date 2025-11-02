import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { PageContent } from '../components/PageContent';
import { useGetInterviews } from '../queries/useGetInterviews';
import { useGetPages } from '../queries/useGetPages';
import {
  BodyText,
  BodyTextSmall,
  BodyTextTiny,
  ItemButton,
  ItemContainer,
  ItemTitle,
} from '../styling/styles';

export const Niche = () => {
  const navigate = useNavigate();
  const {
    data: page,
    isLoading: isNichePageLoading,
    isError: isNichePageError,
  } = useGetPages('niche');

  const {
    data: interviews,
    isLoading: isInterviewsLoading,
    isError: isInterviewsError,
  } = useGetInterviews();

  if (isNichePageLoading || isInterviewsLoading) {
    return (
      <Layout>
        <BodyText>Loading...</BodyText>
      </Layout>
    );
  }

  if (isNichePageError || isInterviewsError || !page) {
    return (
      <Layout>
        <BodyText>Error loading interviews</BodyText>
      </Layout>
    );
  }

  const handleInterviewClick = (interviewId: string) => {
    navigate(`/niche/${interviewId}`);
  };

  return (
    <>
      <Header title="What's your Niche?" />
      <Layout>
        <PageContent content={page[0].copy} />
        <ItemContainer>
          {interviews?.map((interview) => (
            <ItemButton
              key={interview._id}
              onClick={() => handleInterviewClick(interview._id)}
            >
              <ItemTitle>{interview.title}</ItemTitle>
              <BodyTextSmall>{interview.intervieweeName}</BodyTextSmall>
              <BodyTextTiny>{interview.date}</BodyTextTiny>
            </ItemButton>
          ))}
        </ItemContainer>
      </Layout>
    </>
  );
};
