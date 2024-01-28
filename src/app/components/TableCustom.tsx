"use client";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Popup from "./Popup";
import { IExpense } from "../@types/expense-type";
import { fmtDate } from "../utils/datetime";

interface ITableProp {
  data?: IExpense[];
}

export const TableCustom = ({ data }: ITableProp) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <TableContainer >
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
            {data?.map((item, index) => (
              <>
                <Tr key={`te_${item}_tbs`}>
                  <Td>{fmtDate(item.createdAt)}</Td>
                  <Td isNumeric>{`${item.expend} ฿`}</Td>
                  <Td>{fmtDate(item.expendDate)}</Td>
                  <Td>
                    <>
                      <EditIcon mx={".625rem"} onClick={() => onOpen()} />
                      <DeleteIcon mx={".625rem"} onClick={() => onOpen()} />
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
      <Popup message="popup" isOpen={isOpen} onClose={onClose}></Popup>
    </>
  );
};
