import { styled } from 'styled-components';
import { Collection } from '../components/Collection';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { useGetCollections } from '../queries/useGetCollections';
import { BodyText } from '../styling/styles';

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
  const { data: collections } = useGetCollections();

  return (
    <>
      <Header title="Starry Nights" />
      <Layout>
        <BodyText>
          Contributions ranging across many different topics- think pieces, one
          take writings, opinions and feelings, journal entries- ultimately
          thoughts that have intrigued the thought bearer and stuck.
        </BodyText>
        <CollectionContainer>
          {collections?.map((collection) => {
            return <Collection key={collection._id} collection={collection} />;
          })}
        </CollectionContainer>
      </Layout>
    </>
  );
};
