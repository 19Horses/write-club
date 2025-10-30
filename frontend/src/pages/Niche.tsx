import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { useGetInterviews } from '../queries/useGetInterviews';
import { BodyText } from '../styling/styles';

export const Niche = () => {
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

  console.log(interviews);

  return (
    <>
      <Header title="What's your Niche?" />
      <Layout>
        <BodyText>
          Interviews with a range of people from different fields providing
          insight into the minds of some of this generations intellectual and
          creative thinkers and talents.
        </BodyText>
      </Layout>
    </>
  );
};
