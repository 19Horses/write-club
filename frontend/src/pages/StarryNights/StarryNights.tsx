import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { PageContent } from '../../components/PageContent';
import { useGetCollection } from '../../queries/useGetCollections';
import { useGetPages } from '../../queries/useGetPages';
import { BodyText } from '../../styling/styles';
import { CollectionNavigation } from './Navigation';

import { useNavigate, useParams } from 'react-router';

export const StarryNights = () => {
  const navigate = useNavigate();
  const { collectionId = '' } = useParams();
  const {
    data: collection,
    isLoading: isCollectionLoading,
    isError: isCollectionError,
  } = useGetCollection(collectionId);
  const {
    data: page,
    isLoading: isStarryNightsPageLoading,
    isError: isStarryNightsPageError,
  } = useGetPages('starry-nights');

  if (isStarryNightsPageLoading || isCollectionLoading) {
    return (
      <Layout>
        <BodyText>Loading...</BodyText>
      </Layout>
    );
  }

  if (isStarryNightsPageError || isCollectionError || !page) {
    return (
      <Layout>
        <BodyText>Error loading page</BodyText>
      </Layout>
    );
  }

  return (
    <>
      <Header title="Starry Nights" withStar />
      <Layout>
        <PageContent content={page[0].copy} />
        {collection?.essays?.map((essay) => {
          return (
            <BodyText
              key={essay._id}
              onClick={() => {
                navigate(`/starry-nights/${collectionId}/${essay._id}`);
              }}
            >
              {essay.title}
            </BodyText>
          );
        })}
      </Layout>
      <CollectionNavigation />
    </>
  );
};
