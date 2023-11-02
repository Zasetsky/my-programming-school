export interface Lesson {
  id: number;
  module_id: number;
  subject_name: string;
  lesson_date: string;
  start_time: string;
  end_time: string;
  homework?: string;
  status: string;
}

export interface LessonState {
  lessons: Lesson[];
  selectedDate?: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
