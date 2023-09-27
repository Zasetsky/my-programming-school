export interface Lesson {
  subjectId: number;
  moduleId: number;
  subjectName: string;
  moduleName: string;
  lessonDate: string;
}

export interface Homework {
  moduleName: string;
  homeworkDate: string;
  homeworkText: string;
  startTime: string;
}
