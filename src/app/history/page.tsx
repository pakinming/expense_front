// app/history/page.tsx
"use client";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import Popup from "../components/Popup";
import { IGetListExpense } from "../@types/expense-type";
import { IGetAllHistory, IHistory } from "../@types/history-type";
import { fmtDate } from "../utils/datetime";

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
  return (
    <>
      <TableContainer>
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th>Items</Th>
              <Th isNumeric>expend</Th>
              <Th>date</Th>
              <Th>note</Th>

              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {mockData?.map((item: IHistory, index: number) => (
              <>
                <Tr key={`te_${item}_tbs`}>
                  <Td>{fmtDate(item.createdAt)}</Td>
                  <Td isNumeric>{`${item.expend} ฿`}</Td>
                  <Td>{fmtDate(item.expendDate) }</Td>
                  <Td>
                    <>
                      <EditIcon mx={".625rem"} />
                      <DeleteIcon mx={".625rem"} />
                    </>
                  </Td>
                </Tr>
              </>
            ))}
          </Tbody>

          <Tfoot>
            <Tr>
              <Th></Th>
              <Th isNumeric>10</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {/* <Popup message="popup" isOpen={isOpen} onClose={onClose}></Popup> */}
    </>
  );
}
