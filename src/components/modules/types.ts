export interface Module {
  id: string;
  name: string;
  totalLessonCount: number;
  completedLessonCount: number;
  status: 'paid' | 'unpaid';
  startDate: string; // Дата начала в формате YYYY-MM-DD
  endDate: string; // Дата окончания в формате YYYY-MM-DD
  grade: 'repeat' | 'danger' | 'success';
  comment: string;
  lessonDays: string[]; // Массив дней недели, например, ['Monday', 'Wednesday']
  startTime: string; // Время начала, например, "14:00"
  duration: string; // Продолжительность, например, "1h 30m"
  nextLessonDate: string; // Дата следующего урока в формате YYYY-MM-DD
}
