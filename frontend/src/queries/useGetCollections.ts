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

export type EssayCollectionType = {
  _id: string;
  title: string;
  essays: EssayType[];
};

const collectionsQuery = `
*[_type == 'essayCollection'] | order(_createdAt desc){
  _id,
  title,
  "essays": essays[]->{
    _id,
    title,
    author,
    date,
    content
  }
}`;

const getCollections = async (): Promise<{ result: EssayCollectionType[] }> => {
  const response = await axios.get(getApiUrl(collectionsQuery));
  return response.data;
};

export const useGetCollections = () => {
  return useQuery({
    queryKey: ['collectionsData'],
    queryFn: getCollections,
    select: (res) => res.result,
  });
};

export const useGetCollection = (collectionId: string) => {
  return useQuery({
    queryKey: ['collectionData', collectionId],
    queryFn: getCollections,
    select: (res) =>
      res.result.find((collection) => collection._id === collectionId),
  });
};
