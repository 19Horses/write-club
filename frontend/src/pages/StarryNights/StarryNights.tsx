import { styled } from 'styled-components';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { PageContent } from '../../components/PageContent';
import { useGetCollection } from '../../queries/useGetCollections';
import { useGetPages } from '../../queries/useGetPages';
import { BodyText, Star } from '../../styling/styles';
import { CollectionNavigation } from './Navigation';
import { useNavigate, useParams } from 'react-router';

const StarryNightsContainer = styled.div`
  display: grid;
  flex: 1;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const GridItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
        <StarryNightsContainer className="starry-nights-container">
          {collection?.essays?.map((essay, index) => {
            return (
              <GridItem key={essay._id}>
                <Star
                  style={{ width: '100%', height: 'auto' }}
                  $rotate={Math.floor(Math.random() * 120) - 60}
                />
                <div style={{ width: '50%', textAlign: 'center' }}>
                  <BodyText
                    style={{ cursor: 'pointer', textAlign: 'center' }}
                    onClick={() => {
                      navigate(`/starry-nights/${collectionId}/${essay._id}`);
                    }}
                  >
                    {essay.title}
                  </BodyText>
                </div>
              </GridItem>
            );
          })}
        </StarryNightsContainer>
      </Layout>
      <CollectionNavigation />
    </>
  );
};
