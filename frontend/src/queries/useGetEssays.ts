import { type PortableTextBlock } from '@portabletext/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getApiUrl } from '../sanityIntegration';

export type EssayType = {
  _id: string;
  author: string;
  date: string;
  content: PortableTextBlock[];
  title: string;
};

const query = `
  *[_type == 'essay']{
  author,
  date,
  content,
  title,
  _id
}
`;

const getEssays = async (): Promise<{ result: EssayType[] }> => {
  const response = await axios.get(getApiUrl(query));
  return response.data;
};

export const useGetEssays = () => {
  return useQuery({
    queryKey: ['essaysData'],
    queryFn: getEssays,
    select: (res) => res.result,
  });
};

export const useGetEssay = (essayId: string) => {
  return useQuery({
    queryKey: ['essayData', essayId],
    queryFn: getEssays,
    select: (res) => res.result.find((essay) => essay._id === essayId),
  });
};
