import { styled } from 'styled-components';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { BodyText, Button } from '../styling/styles';
import { useGetEventLink } from '../queries/useGetEventLink';
import { useGetThemes } from '../queries/useGetThemes';
import { Theme } from '../components/Theme';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
`;

const AccordionContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  border: 1px solid #df1212;
  font: 'League';
  background-color: white;
  margin-top: 60px;
`;

export const WriteClub = () => {
  const { data: eventLink } = useGetEventLink();
  const { data: themes } = useGetThemes();
  return (
    <>
      <Header title="Write Club" />
      <Layout>
        <BodyText>
          A space to be an individual in a community. For anyone who already
          loves to write or has it as something they want to make more time for
          or simply just wants to explore a new hobby. The focus will be on
          journaling/ self-reflective writing.
        </BodyText>
        <BodyText>
          Feel free to bring your own materials including laptops and/or any
          pieces of writing you may already be working on whatever that may be.
          Prompts will be read out for those who wish to engage but ultimately
          the idea is to create a space where people can come and write.
        </BodyText>
        <BodyText>Come as you are. All genders and races welcome.</BodyText>
        <BodyText>
          No one will be expected to share any of their writing.
        </BodyText>
        <ButtonContainer>
          <Button>
            <a href={eventLink?.url} target="_blank" rel="noopener noreferrer">
              (Eventbrite Link)
            </a>
          </Button>
        </ButtonContainer>
        <AccordionContainer>
          {themes?.map((theme) => (
            <Theme key={theme._id} theme={theme} />
          ))}
        </AccordionContainer>
      </Layout>
    </>
  );
};
