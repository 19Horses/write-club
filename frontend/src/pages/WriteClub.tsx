import { styled } from 'styled-components';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { BodyText, Button } from '../styling/styles';
import { useGetEventLink } from '../queries/useGetEventLink';
import { useGetThemes } from '../queries/useGetThemes';
import { Theme } from '../components/Theme';
import { PageContent } from '../components/PageContent';
import { useGetPages } from '../queries/useGetPages';

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
  const {
    data: themes,
    isLoading: isThemesLoading,
    isError: isThemesError,
  } = useGetThemes();
  const {
    data: page,
    isLoading: isWriteClubPageLoading,
    isError: isWriteClubPageError,
  } = useGetPages('write-club');

  if (isWriteClubPageLoading || isThemesLoading) {
    return (
      <Layout>
        <BodyText>Loading...</BodyText>
      </Layout>
    );
  }

  if (isWriteClubPageError || isThemesError || !page) {
    return (
      <Layout>
        <BodyText>Error loading page</BodyText>
      </Layout>
    );
  }

  return (
    <>
      <Header title="Write Club" />
      <Layout>
        <PageContent content={page[0].copy} />
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
