import axios from '../api/axiosInterceptors';
import { Subject, Module } from '../components/subjects/types';

const baseUrl = process.env.REACT_APP_API_BASE_URL || '';

export const fetchSubjectsFromServer = async () => {
  const response = await axios.get(`${baseUrl}/api/getSubjects`);
  console.log(response.data.subjects);

  return response.data.subjects || [];
};

export const addSubjectToServer = async (subject: Subject) => {
  const response = await axios.post(`${baseUrl}/api/addSubject`, subject);
  return response.data;
};

export const addModuleToSubjectOnServer = async (
  subjectId: string,
  module: Module,
) => {
  const response = await axios.post(
    `${baseUrl}/api/addModuleToSubject/${subjectId}`,
    module,
  );
  return response.data;
};

export const updateSubjectOnServer = async (
  subjectId: string,
  updatedSubject: Subject,
) => {
  const response = await axios.put(
    `${baseUrl}/api/updateSubject/${subjectId}`,
    updatedSubject,
  );
  return response.data;
};

export const updateModuleInSubjectOnServer = async (
  subjectId: string,
  moduleId: string,
  updatedModule: Module,
) => {
  const response = await axios.put(
    `${baseUrl}/api/updateModuleInSubject/${subjectId}/${moduleId}`,
    updatedModule,
  );
  return response.data;
};
