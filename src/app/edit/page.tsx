// app/edit/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Card, Center, Input, Stack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { fmtDateYYYYMMDD } from "../utils/datetime";
import { getOneExpense, updateExpense } from "../services/expense-service";
import { ICreateExpense, IExpense } from "../@types/expense-type";


export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [expend, setExpend] = useState(0);
  const [note, setNote] = useState("");

  const editExpend = async () => {
    if (id) {
      const res = await getOneExpense(parseInt(id));
      const data: IExpense = res.data.data;
      setExpend(data.expend);
      setNote(data.note);
    } else {
      alert("id not found " + id);
    }
  };

  useEffect(() => {
    editExpend();
  }, []);

  const onSave = async (expend: number, note: string) => {
    try {
      const res = await updateExpense(id as string, {        
        expend,
        note,
      });

      if (res.status === 200) {
        alert(`Update ${res.statusText}`);
        setNote("");
        setExpend(0);
        router.back()
      } else {
      }
    } catch (error) {
      alert(`Update fail ${error}`);
    }
  };

  return (
    <>
      <Center m={0}>
        <Stack textAlign={"center"} mt={20}>
          <Box fontSize={50}>Edit Expend</Box>
          <Card
            w={{ base: "250px", md: "500px" }}
            mb={0}
            backgroundColor="darkgray"
            borderRadius="16px"
          >
            <Input
              value={expend}
              onChange={(e) => {
                setExpend(parseInt(e.target.value) + 0.0);
              }}
              bgColor={"#EEEDEB"}
              type="number"
              placeholder="0"
              border={"none"}
              p={20}
              w={"100%"}
              fontSize={{ base: 50 }}
              fontWeight={700}
              textAlign={"center"}
            />
            <Input
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
              type="text"
              placeholder="*Note"
              border={"none"}
              p={6}
              bg={"#E0CCBE"}
              fontSize={{ base: 20 }}
              fontWeight={500}
              textAlign={"center"}
            />
            <Button
              colorScheme="blue"
              h={{ md: "80px" }}
              fontSize={"40px"}
              onClick={() => onSave(expend, note)}
            >
              Save
            </Button>
          </Card>
        </Stack>
      </Center>
    </>
  );
}
