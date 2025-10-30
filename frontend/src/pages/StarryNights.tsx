import { styled } from 'styled-components';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { useGetEssays } from '../queries/useGetEssays';
import {
  BodyText,
  BodyTextSmall,
  BodyTextTiny,
  EssayItemTitle,
} from '../styling/styles';
import { useNavigate } from 'react-router';

const EssayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
`;

const EssayItem = styled.button`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 4px;
  border: 1px solid #df1212;
  padding: 10px;
  font: 'League';
  cursor: pointer;
  background-color: transparent;
`;

export const StarryNights = () => {
  const navigate = useNavigate();
  const { data: essays } = useGetEssays();

  const handleEssayClick = (essayId: string) => {
    navigate(`/starry-nights/${essayId}`);
  };

  return (
    <>
      <Header title="Starry Nights" />
      <Layout>
        <BodyText>
          Contributions ranging across many different topics- think pieces, one
          take writings, opinions and feelings, journal entries- ultimately
          thoughts that have intrigued the thought bearer and stuck.
        </BodyText>
        <EssayContainer>
          {essays?.map((essay) => (
            <EssayItem
              key={essay._id}
              onClick={() => handleEssayClick(essay._id)}
            >
              <EssayItemTitle>{essay.title}</EssayItemTitle>
              <BodyTextSmall>{essay.author}</BodyTextSmall>
              <BodyTextTiny>{essay.date}</BodyTextTiny>
            </EssayItem>
          ))}
        </EssayContainer>
      </Layout>
    </>
  );
};
