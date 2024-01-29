// app/history/page.tsx
"use client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { IGetAll } from "../@types/get-all";
import { IHistory } from "../@types/history-type";
import { fmtDate, fmtTime } from "../utils/datetime";
import { deleteHistory, getAllHistory } from "../services/history-service";
import Popup from "../components/Popup";
import { deleteExpense } from "../services/expense-service";

const mockData: IHistory[] = [
  {
    id: 9,
    expendId: 9,
    expend: 20.0,
    expendDate: new Date("2024-01-28"),
    note: "coffee",
    action: "CREATE",
    createdAt: new Date("2024-01-28T17:31:07+0700"),
  },
  {
    id: 8,
    expendId: 8,
    expend: 20.0,
    expendDate: new Date("2024-01-28"),
    note: "coffee",
    action: "CREATE",
    createdAt: new Date("2024-01-28T17:31:07+0700"),
  },
  {
    id: 7,
    expendId: 7,
    expend: 20.0,
    expendDate: new Date("2024-01-28"),
    note: "coffee",
    action: "CREATE",
    createdAt: new Date("2024-01-28T17:31:07+0700"),
  },
];

export default function Page() {
  const [historyList, setHistoryList] = useState<IGetAll<IHistory>>();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectDel, setSelectDel] = useState(0);

  const onSave = async () => {
    const res = await deleteHistory(selectDel);

    if (res.status === 200) {
      inti();

      onClose();
    }
  };

  const onClickAction = async (id: number) => {
    setSelectDel(id);
  };

  const inti = async () => {
    const res = await getAllHistory();
    const { data } = await res.data;
    console.log(data);
    setHistoryList(data);
  };

  useEffect(() => { inti();}, []);

  return (
    <>
      <Center>
        <TableContainer mt={10}>
          <Table variant="unstyled">
            <Thead>
              <Tr>
                <Th>Create Date</Th>
                <Th>Action</Th>

                <Th isNumeric>expend</Th>
                <Th>date</Th>
                <Th>note</Th>

                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {historyList?.content?.map((item: IHistory, index: number) => (
                <>
                  <Tr key={`te_${item}_tbs`}>
                    <Td>
                      {fmtDate(item.createdAt)} {fmtTime(item.createdAt)}
                    </Td>
                    <Td>{action(item.action)}</Td>
                    <Td>{fmtDate(item.expendDate)}</Td>
                    <Td isNumeric>{`${item.expend} ฿`}</Td>
                    <Td>{item.note}</Td>
                    <Td>
                      <>
                        <DeleteIcon
                          fontSize={20}
                          mx={".625rem"}
                          color={"orangered"}
                          onClick={() => {
                            onOpen();
                            onClickAction(item.id);
                          }}
                        />
                      </>
                    </Td>
                  </Tr>
                </>
              ))}
            </Tbody>

            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Center>
      <Popup
        title="HISTORY DELETE"
        desc="You are sure delete?"
        isOpen={isOpen}
        onClose={onClose}
        onSave={onSave}
      ></Popup>
    </>
  );
}
const action = (event: string) => {
  switch (event) {
    case "CREATE":
      return <Text color={"green"}>{event}</Text>;
    case "DELETE":
      return <Text color={"#F05941"}>{event}</Text>;
    case "UPDATE":
      return <Text color={"orchid"}>{event}</Text>;
  }
};
