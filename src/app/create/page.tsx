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
} from "@chakra-ui/react";
import { useState } from "react";
import { fmtDateYYYYMMDD } from "../utils/datetime";

export default function Page() {
  var todayDate = new Date().toISOString().slice(0, 10);

  const [selectedDate, setSelectedDate] = useState(fmtDateYYYYMMDD(new Date()));

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 1);

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
               let isValid =  new Date(date.target.value).getTime() > maxDate.getTime();
               console.log('isValid', isValid, new Date(selectedDate).getTime() , maxDate.getTime());

                if(isValid){
                  setSelectedDate(date.target.value);

                }else {
                  alert('over one year');
                }
              }}
            ></Input>
            <Input
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
              type="text"
              placeholder="*Note"
              border={"none"}
              p={6}
              bg={"#E0CCBE"}
              fontSize={{ base: 20 }}
              fontWeight={500}
              textAlign={"center"}
            />
            <Button colorScheme="blue" h={{ md: "80px" }} fontSize={"40px"}>
              Save
            </Button>
          </Card>
        </Stack>
      </Center>
    </>
  );
}
