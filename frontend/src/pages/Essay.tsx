import { Navigate, useParams } from 'react-router';
import { styled } from 'styled-components';
import { EssayContent } from '../components/EssayContent';
import { Layout } from '../components/Layout';
import { useGetEssay } from '../queries/useGetEssays';
import {
  BodyTextSmall,
  BodyTextTiny,
  Buffer,
  ItemTitle,
} from '../styling/styles';
import { BackButton } from '../components/BackButton';

const EssayHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  text-align: left;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    text-align: right;
  }
`;

export const Essay = () => {
  const { essayId } = useParams();

  if (!essayId) {
    return <Navigate to="/starry-nights" replace />;
  }

  const { data: essay, isError, isLoading } = useGetEssay(essayId);

  if ((!isLoading && !essay) || isError) {
    return <Navigate to="/starry-nights" replace />;
  }

  if (isLoading) {
    return (
      <Layout>
        <BodyTextSmall>Loading...</BodyTextSmall>
      </Layout>
    );
  }

  if (!essay) {
    return (
      <Layout>
        <BodyTextSmall>Essay not found</BodyTextSmall>
      </Layout>
    );
  }

  return (
    <>
      <Buffer />
      <BackButton />
      <Layout>
        <EssayHeader>
          <ItemTitle>{essay.title}</ItemTitle>
          <BodyTextSmall>{essay.author}</BodyTextSmall>
          <BodyTextTiny>{essay.date}</BodyTextTiny>
        </EssayHeader>
        <EssayContent content={essay.content} />
      </Layout>
    </>
  );
};
