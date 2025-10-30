import { Navigate, useNavigate, useParams } from 'react-router';
import { styled } from 'styled-components';
import back from '../assets/images/back.svg';
import { EssayContent } from '../components/EssayContent';
import { Layout } from '../components/Layout';
import { useGetEssay } from '../queries/useGetEssays';
import { BodyTextSmall, BodyTextTiny, EssayItemTitle } from '../styling/styles';

const Back = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 1000;
`;

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

const Buffer = styled.div`
  padding-top: 20px;
`;

export const Essay = () => {
  const { essayId } = useParams();
  const navigate = useNavigate();

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

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      {/* <Header title={essay.title} withBackButton /> */}
      <Buffer />
      <Back src={back} alt="back" onClick={handleBackButtonClick} />
      <Layout>
        <EssayHeader>
          <EssayItemTitle>{essay.title}</EssayItemTitle>
          <BodyTextSmall>{essay.author}</BodyTextSmall>
          <BodyTextTiny>{essay.date}</BodyTextTiny>
        </EssayHeader>
        <EssayContent content={essay.content} />
      </Layout>
    </>
  );
};
