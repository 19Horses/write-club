import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { BodyText } from '../styling/styles';

export const Niche = () => {
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
