import { useState } from 'react';
import { styled } from 'styled-components';
import { Layout } from '../../components/Layout';
import { useGetCollections } from '../../queries/useGetCollections';
import { fadeIn } from '../../styling/animations';
import {
  Arrow,
  BodyText,
  BodyTextTiny,
  Link,
  Star,
} from '../../styling/styles';
import arrow from '../../assets/images/back.svg';
import star from '../../assets/images/star.webp';

const NavigationButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 15;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  animation: ${fadeIn} 0.2s ease-in-out;

  &:hover {
    ${BodyTextTiny} {
      transition: all 0.2s ease-in-out;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const NavText = styled(BodyTextTiny)`
  opacity: 0;
  transform: translateY(10px);
`;

const NavStar = styled(Star)`
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
`;

const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  margin-top: 100px;
  background-color: rgba(255, 255, 255, 0.95);
`;

export const CollectionNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: collections } = useGetCollections();
  return (
    <>
      {isOpen && (
        <Modal
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Layout>
            <BodyText>Previous nights</BodyText>
            {collections?.map((collection, index) => {
              return (
                <Link
                  key={collection._id}
                  $isOpen={isOpen}
                  $animationDelay={index * 0.1}
                >
                  <Arrow src={arrow} alt="arrow" />
                  {collection.title}
                </Link>
              );
            })}
          </Layout>
        </Modal>
      )}
      <NavigationButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <NavText>{isOpen ? 'Close' : 'Previous nights'}</NavText>
        <NavStar $width={50} $height={50} src={star} alt="star" />
      </NavigationButton>
    </>
  );
};
