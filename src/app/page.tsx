// app/page.tsx

"use client";

import { IExpense, IGetListExpense } from "@/app/@types/expense-type";
import { Box, Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { TableCustom } from "./components/TableCustom";
import { revalidatePath } from "next/cache";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import { useRouter } from "next/router";

type Props = {};

export default function Page({}: Props) {
  const [expendList, setDataList] = useState<IGetListExpense>();

  const onclick = async () => {
    await fetch("/api/expense");

    console.count("click");
  };


  const inti = async () => {
    const res = await fetch("/api/expense");
    const { data } = await res.json();
    console.log(data);
    setDataList(data);
  };

  useEffect(() => {
    inti();
  }, []);

  return (
    <>
      <Button color={"text_line"} colorScheme="blue" onClick={() => onclick()}>
        Click Me! - {expendList?.totalPages} -
      </Button>
      <Box> SUMMARY EXPEND {expendList?.expendSummary}</Box>
      {/* - {expendList?.content[0].expend} - */}
      <TableCustom data={expendList?.content}></TableCustom>
    </>
  );
}
