// app/page.tsx

"use client";

import { IExpense } from "@/app/@types/expense-type";
import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IGetAll } from "./@types/get-all";
import { TableCustom } from "./components/TableCustom";
import { getAllExpense } from "./services/expense-service";

export default function Page() {
  const [expendList, setDataList] = useState<IGetAll<IExpense>>();

  const inti = async () => {
    const res = await getAllExpense();
    const { data } = await res.data;
    console.log(data);
    setDataList(data);
  };

  useEffect(() => {
    inti();
  }, []);

  return (
    <>
      <Center>
        <Box
          h={10}
          w={"500px"}
          bg={"orange"}
          m={10}
          textAlign={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={20} fontWeight={600}>
            SUMMARY EXPEND: {expendList?.expendSummary}
            {" ฿"}
          </Text>
        </Box>
      </Center>

      <Center>
        <TableCustom data={expendList?.content}></TableCustom>
      </Center>
    </>
  );
}
