import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL || '';

export const fetchAllUserLessons = async () => {
  const response = await axios.get(`${baseUrl}/api/getAllLessonsForUser`);

  return response.data.lessons;
};

export const apiRescheduleLesson = async (
  lessonId: number,
  newDate?: string,
  newTime?: string,
) => {
  const response = await axios.post(
    `${baseUrl}/api/rescheduleLesson/${lessonId}`,
    { newDate, newTime },
  );
  return response.data;
};

export const apiSetHomework = async (lessonId: number, homework: string) => {
  const response = await axios.post(`${baseUrl}/api/setHomework/${lessonId}`, {
    homework,
  });
  return response.data;
};
