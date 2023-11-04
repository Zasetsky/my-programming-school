import axios from './axiosInterceptors';
import { Subject } from '../components/subjects/types';

const baseUrl = process.env.REACT_APP_API_BASE_URL || '';

export const fetchSubjectsFromServer = async () => {
  const response = await axios.get(`${baseUrl}/getSubjects`);

  return response.data.subjects || [];
};

export const addSubjectToServer = async (subject: Subject) => {
  const response = await axios.post(`${baseUrl}/addSubject`, subject);
  return response.data;
};

export const updateSubjectOnServer = async (
  subjectId: number,
  updatedSubject: Subject,
) => {
  const response = await axios.put(
    `${baseUrl}/updateSubject/${subjectId}`,
    updatedSubject,
  );
  return response.data;
};
