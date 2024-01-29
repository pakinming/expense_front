export interface ICreateExpense {
  expend: number;
  expendDate?: Date;
  note: string;
}
export interface IExpense {
  id: number;
  expend: number;
  expendDate: Date;
  note: string;
  createdAt: Date;
}

