import { NextRequest, NextResponse } from "next/server";

const expenseURL = "http://localhost:8081/api/v1/expense";
type Job = {
  id?: string;
  message: string;
};
let todoList: Job[] = [];
let count = 0;

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const res = await fetch(`${expenseURL}/?pageSize=30`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      Allow: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  return res;
}

export async function POST(request: Request) {
  const { body } = request;
  const res = await fetch(`${expenseURL}`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Allow: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  });
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const res = await fetch(`${expenseURL}/${id}`, {
    method: "DELETE",
    mode: "no-cors",
    headers: {
      Allow: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
