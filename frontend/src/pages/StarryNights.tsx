import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { BodyText } from '../styling/styles';

export const StarryNights = () => {
  return (
    <>
      <Header title="Starry Nights" />
      <Layout>
        <BodyText>
          Contributions ranging across many different topics- think pieces, one
          take writings, opinions and feelings, journal entries- ultimately
          thoughts that have intrigued the thought bearer and stuck.
        </BodyText>
      </Layout>
    </>
  );
};
