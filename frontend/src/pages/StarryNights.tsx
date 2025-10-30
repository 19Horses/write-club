import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { useGetEssays } from '../queries/useGetEssays';
import {
  BodyText,
  BodyTextSmall,
  BodyTextTiny,
  ItemButton,
  ItemContainer,
  ItemTitle,
} from '../styling/styles';

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
        <ItemContainer>
          {essays?.map((essay) => (
            <ItemButton
              key={essay._id}
              onClick={() => handleEssayClick(essay._id)}
            >
              <ItemTitle>{essay.title}</ItemTitle>
              <BodyTextSmall>{essay.author}</BodyTextSmall>
              <BodyTextTiny>{essay.date}</BodyTextTiny>
            </ItemButton>
          ))}
        </ItemContainer>
      </Layout>
    </>
  );
};
