import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { BodyText } from '../styling/styles';

export const About = () => {
  return (
    <>
      <Header title="About" />
      <Layout>
        <BodyText>
          Write Club is intended to be a community based website/ digital space
          where the voices of the few can be heard by those who want to listen.
        </BodyText>
        <BodyText>
          A place where essays, thoughts and think pieces can find a new home
          free from the pressure of likes, views, comments or subscribes. For
          all who want to write into the void and be part of something in their
          wake.
        </BodyText>
        <BodyText>This is a space for all to inspire and be inspired.</BodyText>
      </Layout>
    </>
  );
};
