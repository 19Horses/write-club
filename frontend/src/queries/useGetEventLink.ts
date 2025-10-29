import { useQuery } from '@tanstack/react-query';
import { getApiUrl } from '../sanityIntegration';
import axios from 'axios';

export type EventLinkType = {
  _id: string;
  url: string;
};

const query = `
  *[_type == 'eventLink']{
  url,
  _id
}
`;

const getEventLink = async (): Promise<{ result: EventLinkType[] }> => {
  const response = await axios.get(getApiUrl(query));
  return response.data;
};

export const useGetEventLink = () => {
  return useQuery({
    queryKey: ['eventLinkData'],
    queryFn: getEventLink,
    select: (res) => res.result[0],
  });
};
