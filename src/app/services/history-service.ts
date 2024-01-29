import axios from "axios";
import { IHistory } from "../@types/history-type";
import { IPagination } from "../@types/pagination";

const paging: IPagination = {
  sortBy: "createdAt",
  sortDirection: "desc",
  pageNo: 1,
  pageSize: 100,
};
export async function getAllHistory(pagination: IPagination = paging) {

  return await axios.get("/api/history/", {
    params: {
      ...pagination,
    },
  });
}

export async function deleteHistory(id: number) {
  return await axios.delete("/api/history/", {
    params: { id },
  });
}
