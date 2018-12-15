
export interface Task {
  done: boolean;
  category: string;
  label: string;
  time: string;
  nofication: boolean;
}

export interface TaskList {
  date: string;
  data: Task[];
}

export const categories = [
  { label: 'personal' },
  { label: 'work' },
  { label: 'meeting' },
  { label: 'shopping' },
  { label: 'party' },
  { label: 'study' },
];