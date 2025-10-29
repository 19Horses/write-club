import { Navigate, useParams } from 'react-router';
import { EssayContent } from '../components/EssayContent';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { useGetEssay } from '../queries/useGetEssays';

export const Essay = () => {
  const { essayId } = useParams();

  if (!essayId) {
    return <Navigate to="/starry-nights" replace />;
  }

  const { data: essay } = useGetEssay(essayId);

  if (!essay) {
    return <Navigate to="/starry-nights" replace />;
  }

  return (
    <>
      <Header title={essay.title} withBackButton />
      <Layout>
        <EssayContent content={essay.content} />
      </Layout>
    </>
  );
};
