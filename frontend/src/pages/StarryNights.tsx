import { styled } from 'styled-components';
import { Collection } from '../components/Collection';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { useGetCollections } from '../queries/useGetCollections';
import { BodyText } from '../styling/styles';
import { useGetPages } from '../queries/useGetPages';
import { PageContent } from '../components/PageContent';

export const CollectionContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  border: 1px solid #df1212;
  font: 'League';
  cursor: pointer;
  background-color: white;
`;

export const StarryNights = () => {
  const {
    data: collections,
    isLoading: isCollectionsLoading,
    isError: isCollectionsError,
  } = useGetCollections();
  const {
    data: page,
    isLoading: isStarryNightsPageLoading,
    isError: isStarryNightsPageError,
  } = useGetPages('starry-nights');

  if (isStarryNightsPageLoading || isCollectionsLoading) {
    return (
      <Layout>
        <BodyText>Loading...</BodyText>
      </Layout>
    );
  }

  if (isStarryNightsPageError || isCollectionsError || !page) {
    return (
      <Layout>
        <BodyText>Error loading page</BodyText>
      </Layout>
    );
  }

  return (
    <>
      <Header title="Starry Nights" />
      <Layout>
        <PageContent content={page[0].copy} />
        <CollectionContainer>
          {collections?.map((collection) => {
            return <Collection key={collection._id} collection={collection} />;
          })}
        </CollectionContainer>
      </Layout>
    </>
  );
};
