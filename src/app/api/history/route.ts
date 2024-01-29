import { IPagination } from "@/app/@types/pagination";
import { NextRequest, NextResponse } from "next/server";


const historyURL = "http://localhost:8081/api/v1/history";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const params = url.search;

  const res = await fetch(`${historyURL}/${params}`, {
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

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const res = await fetch(`${historyURL}/${id}`, {
    method: "DELETE",
    // mode: "no-cors",
    headers: {
      Allow: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });  
  return res;
}
