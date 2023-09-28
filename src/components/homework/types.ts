export interface Lesson {
  subjectId: number;
  moduleId: number;
  subjectName: string;
  moduleName: string;
  lessonDate: string;
  startTime: string;
}

export interface Homework {
  subjectName: string;
  homeworkDate: string;
  homeworkText: string;
  startTime: string;
}
