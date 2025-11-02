import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getApiUrl } from '../sanityIntegration';

export type ThemeType = {
  _id: string;
  theme: string;
  prompts: string[];
};

const themesQuery = `
*[_type == 'theme']{
  _id,
  theme,
  prompts
}`;

const getThemes = async (): Promise<{ result: ThemeType[] }> => {
  const response = await axios.get(getApiUrl(themesQuery));
  return response.data;
};

export const useGetThemes = () => {
  return useQuery({
    queryKey: ['themesData'],
    queryFn: getThemes,
    select: (res) => res.result,
  });
};
