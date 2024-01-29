import { NextRequest, NextResponse } from "next/server";

const expenseURL = "http://localhost:8081/api/v1/expense";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const uri = url.search;
  if (id) {
    //by one
    const res = await fetch(`${expenseURL}/${id}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        Allow: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res;
  } else {
    //many
    const res = await fetch(`${expenseURL}${url.search}`, {
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
}

export async function POST(request: NextRequest) {
  const { data } = await request.json();

  const res = await fetch(`${expenseURL}`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Allow: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });
  return res;
}

export async function PUT(request: NextRequest) {
  const { data } = await request.json();
  console.log('put api data', data);
  console.log('req', request.url);
  
  

  const res = await fetch(`${expenseURL}`, {
    method: "PUT",
    // mode: "no-cors",
    headers: {
      Allow: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });
  console.log(res);
  
  return res;
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const res = await fetch(`${expenseURL}/${id}`, {
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
