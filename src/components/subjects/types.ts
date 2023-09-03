import { Module } from '../modules/types';

export interface Subject {
  id: string;
  name: string;
  modules: Module[];
}
