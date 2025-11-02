import { type PortableTextBlock } from '@portabletext/react';
import { useQuery } from '@tanstack/react-query';
import { getApiUrl } from '../sanityIntegration';
import axios from 'axios';

export type PageType = {
  _id: string;
  name: string;
  copy: PortableTextBlock[];
};

const query = `
  *[_type == 'page']{
  _id,
  name,
  copy
}
`;

const getPages = async (): Promise<{ result: PageType[] }> => {
  const response = await axios.get(getApiUrl(query));
  return response.data;
};

export const useGetPages = (name?: string) => {
  return useQuery({
    queryKey: name ? ['pagesData', name] : ['pagesData'],
    queryFn: getPages,
    select: (res) =>
      name ? res.result.filter((page) => page.name === name) : res.result,
  });
};
