import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || '';

// Получить все модули для предмета
export const getModulesForSubject = (subjectId: number) => {
  return axios.get(`${baseURL}/getModulesForSubject/${subjectId}`);
};

// Добавить модуль
export const addModule = (subjectId: number, moduleData: object) => {
  return axios.post(`${baseURL}/addModule/${subjectId}`, moduleData);
};

// Обновить модуль
export const updateModule = (moduleId: number, updatedData: object) => {
  return axios.put(`${baseURL}/updateModule/${moduleId}`, updatedData);
};
