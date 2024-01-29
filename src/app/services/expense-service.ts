import axios from "axios";
import { ICreateExpense } from "../@types/expense-type";
import { IPagination } from "../@types/pagination";

const paging: IPagination = {
  sortBy: "expendDate",
  sortDirection: "desc",
  pageNo: 1,
  pageSize: 100,
};

export async function getOneExpense(id: number) {
  return await axios.get("/api/expense/", {
    params: { id },
  });
}

export async function getAllExpense(pagination: IPagination = paging) {
  return await axios.get("/api/expense/", {
    params: { ...pagination },
  });
}

export async function createExpense(body: ICreateExpense) {
  return await axios.post("/api/expense/", {
    data: body,
  });
}

export async function updateExpense(id:string, body: ICreateExpense) {
  return await axios.put("/api/expense/", {
    data: { ...body, id: id },
  });
}

export async function deleteExpense(id: number) {
  console.log("deleteExpense", id);

  return await axios.delete(`/api/expense/`, {
    params: { id },
  });
}
