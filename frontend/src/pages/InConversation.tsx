import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { BodyText } from '../styling/styles';

export const InConversation = () => {
  return (
    <>
      <Header title="In Conversation" />
      <Layout>
        <BodyText>
          Bi-Monthly talks and workshops hosted by local authors, storytellers
          and academics focused on sharing their stories, processes and what
          words and writing means to them
        </BodyText>
      </Layout>
    </>
  );
};
