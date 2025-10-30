import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { useGetInterviews } from '../queries/useGetInterviews';
import {
  BodyText,
  BodyTextSmall,
  BodyTextTiny,
  ItemButton,
  ItemContainer,
  ItemTitle,
} from '../styling/styles';
import { useNavigate } from 'react-router';

export const Niche = () => {
  const navigate = useNavigate();

  const { data: interviews, isLoading, isError } = useGetInterviews();

  if (isLoading) {
    return (
      <Layout>
        <BodyText>Loading...</BodyText>
      </Layout>
    );
  }

  if (isError) {
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
        <BodyText>
          Interviews with a range of people from different fields providing
          insight into the minds of some of this generations intellectual and
          creative thinkers and talents.
        </BodyText>
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
