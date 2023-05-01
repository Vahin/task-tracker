export enum TaskStatus {
  completed = "completed",
  uncompleted = "uncopleted",
  overdue = "overdue",
}

export type Task = {
  title: string;
  description?: string;
  status: TaskStatus;
  isChosen: boolean;
  performersID?: string[];
  participantsID: string[];
  deadline?: Date;
  projectID?: string;
};

export enum FetchStatus {
  pending = "pending",
  fullfilled = "fullfilled",
  rejected = "rejected",
}

export interface TaskInitialState {
  list: Task[];
  fetchStatus: FetchStatus;
  error: string | null;
}
