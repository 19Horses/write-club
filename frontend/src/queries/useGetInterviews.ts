import { type PortableTextBlock } from '@portabletext/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getApiUrl } from '../sanityIntegration';

export type InterviewTurn = {
  speakerName: string;
  text: PortableTextBlock[];
};

export type InterviewType = {
  _id: string;
  title: string;
  date: string;
  interviewerName: string;
  intervieweeName: string;
  transcript: InterviewTurn[];
};

const interviewsQuery = `
*[_type == 'interview']{
  _id,
  title,
  date,
  "interviewerName": interviewer->name,
  "intervieweeName": interviewee->name,
  "transcript": transcript[]{
    "speakerName": speaker->name,
    text
  }
}`;

const getInterviews = async (): Promise<{ result: InterviewType[] }> => {
  const response = await axios.get(getApiUrl(interviewsQuery));
  return response.data;
};

export const useGetInterviews = () => {
  return useQuery({
    queryKey: ['interviewsData'],
    queryFn: getInterviews,
    select: (res) => res.result,
  });
};

export const useGetInterview = (interviewId: string) => {
  return useQuery({
    queryKey: ['interviewData', interviewId],
    queryFn: getInterviews,
    select: (res) =>
      res.result.find((interview) => interview._id === interviewId),
  });
};
