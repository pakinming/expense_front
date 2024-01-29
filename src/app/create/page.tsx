// app/create/page.tsx
"use client";
import {
  Box,
  Button,
  Card,
  Center,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { fmtDateYYYYMMDD } from "../utils/datetime";
import { createExpense } from "../services/expense-service";
import { ICreateExpense } from "../@types/expense-type";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [selectedDate, setSelectedDate] = useState(fmtDateYYYYMMDD(new Date()));
  const [expend, setExpend] = useState(0);
  const [note, setNote] = useState("");

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 1);

  const onSave = async () => {
    const body: ICreateExpense = {
      expend: expend! + 0.0,
      expendDate: new Date(selectedDate),
      note: note,
    };
    try {
      const res = await createExpense(body);
      if (res.status === 200 || res.status === 201) {
        alert("expend create success");
        setExpend(0);
      } else {
        alert(`fail ${res.data.message}`);
      }
      console.log(res);
    } catch (error) {
      alert(`fail ${error}`);
    }
  };

 

  return (
    <>
      <Center m={0}>
        <Stack textAlign={"center"} mt={20}>
          <Box fontSize={50}>Add Expend</Box>
          <Card
            w={{ base: "250px", md: "500px" }}
            mb={0}
            backgroundColor="darkgray"
            borderRadius="16px"
          >
            <Input
              placeholder="Select Date and Time"
              fontSize={{ base: 30, md: 50 }}
              p={10}
              type="date"
              value={selectedDate}
              onChange={(date) => {
                let isValid =
                  new Date(date.target.value).getTime() > maxDate.getTime();
                console.log(
                  "isValid",
                  isValid,
                  new Date(selectedDate).getTime(),
                  maxDate.getTime()
                );

                if (isValid) {
                  setSelectedDate(date.target.value);
                } else {
                  alert("over one year");
                }
              }}
            ></Input>
            <Input
              value={expend}
              onChange={(e) => {
                setExpend(parseFloat(e.target.value));
              }}
              bgColor={"#EEEDEB"}
              type="number"
              placeholder="0"
              border={"none"}
              p={20}
              w={"100%"}
              fontSize={{ base: 30, md: 50 }}
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
              onClick={onSave}
            >
              Save
            </Button>
          </Card>
        </Stack>
      </Center>
    </>
  );
}
