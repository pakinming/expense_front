export interface IGetAllHistory {
  content: IHistory[];
  numberOfResult: number;
  totalResult: number;
  totalPages: number;
}

export interface IHistory {
  id: number;
  expendId: number;
  expend: number;
  expendDate: Date;
  note: string;
  action: string;
  createdAt: Date;
}
