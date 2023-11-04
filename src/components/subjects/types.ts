export interface Subject {
  id: number;
  subject_code: string;
  name: string;
  modules: Module[];
}

export interface SubjectsState {
  subjects: Subject[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export interface ModuleState {
  modules: Module[]; // Замените any на более конкретный тип
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface Module {
  id: string;
  subject_id: number; // Ссылка на предмет
  name: string;
  total_lesson_count: number; // Общее количество уроков
  completed_lesson_count: number; // Завершенное количество уроков
  start_date: string; // Дата начала в формате YYYY-MM-DD
  end_date: string; // Дата окончания в формате YYYY-MM-DD
  lesson_days: string[]; // Массив дней недели, например, ['Monday', 'Wednesday']
  start_time: string; // Время начала, например, "14:00"
  duration: string; // Продолжительность, например, "1h 30m"
  grade: 'repeat' | 'danger' | 'success' | 'not_set'; // Оценка
  status: 'paid' | 'unpaid'; // Статус оплаты
  comment: string; // Комментарий
  next_lesson_date: string; // Дата следующего урока в формате YYYY-MM-DD
}
