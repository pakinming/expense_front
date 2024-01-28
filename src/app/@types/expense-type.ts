export interface ICreateExpense {
  expend: number;
  expendDate: Date;
  note: string;
}

export interface IGetListExpense {
  content: IExpense[];
  numberOfResult: number;
  totalResult: number;
  totalPages: number;
  expendSummary: number;
}

export interface IExpense {
  id: number;
  expend: number;
  expendDate: Date;
  note: String;
  createdAt: Date;
}

