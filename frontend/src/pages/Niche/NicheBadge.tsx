import { BodyText, BodyTextSmall } from '../../styling/styles';
import { styled } from 'styled-components';

export const Badge = styled.button`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Luxury';
  width: 240px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BadgeHeader = styled.div`
  background-color: #e64942;
  color: white;
  padding: 8px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${BodyTextSmall} {
    color: white;
    margin: 0;
  }

  ${BodyText} {
    color: white;
    margin: 0;
  }
`;

export const BadgeContent = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BadgeFooter = styled.div`
  background-color: #e64942;
  color: white;
  padding: 4px 8px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const NicheBadge = ({
  onClick,
  intervieweeName,
}: {
  onClick: () => void;
  intervieweeName: string;
}) => {
  return (
    <Badge onClick={onClick}>
      <BadgeHeader>
        <BodyText>HELLO</BodyText>
        <BodyTextSmall>my name is</BodyTextSmall>
      </BadgeHeader>
      <BadgeContent>
        <BodyText style={{ textAlign: 'center' }}>{intervieweeName}</BodyText>
      </BadgeContent>
      <BadgeFooter />
    </Badge>
  );
};
