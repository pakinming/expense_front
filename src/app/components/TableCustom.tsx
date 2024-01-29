"use client";
import {
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
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Popup from "./Popup";
import { IExpense } from "../@types/expense-type";
import { fmtDate } from "../utils/datetime";
import { useEffect, useState } from "react";
import { on } from "events";
import { deleteExpense } from "../services/expense-service";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { routes } from "../constants/routes";

interface ITableProp {
  data?: IExpense[];
}

export const TableCustom = ({ data }: ITableProp) => {
  const router = useRouter();
  const pathname = usePathname();

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectDel, setSelectDel] = useState(0);
  const [content, setContent] = useState(data);

  const onSave = async () => {
    const res = await deleteExpense(selectDel);

    if (res.status === 200) {
      const arr = content?.filter((item) => item.id !== selectDel);

      console.log(arr);

      setContent(arr);
      onClose();
    }
  };

  const onClickAction = async (id: number) => {
    setSelectDel(id);
  };

  useEffect(() => {
    setContent(data);
  }, [data]);

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
            {content?.map((item, index) => (
              <>
                <Tr key={`te_${index}_tbs`}>
                  <Td>
                    {index + 1} 
                  </Td>
                  <Td isNumeric fontWeight={600}>
                    {" "}
                    {`${item.expend}฿`}
                  </Td>
                  <Td>{fmtDate(item.expendDate)}</Td>
                  <Td>{item.note}</Td>
                  <Td>
                    <>
                      {/* <Link href={""}> */}
                      <EditIcon
                        fontSize={20}
                        color={"lightblue"}
                        mx={"20px"}
                        onClick={() => {
                          onClickAction(item.id);

                          router.push(`${routes.edit}?id=${item.id}`);
                        }}
                        _hover={{ cursor: "pointer" }}
                      />
                      {/* </Link> */}

                      <DeleteIcon
                        fontSize={20}
                        color={"orangered"}
                        mx={"20px"}
                        onClick={() => {
                          onOpen();
                          onClickAction(item.id);
                        }}
                        _hover={{ cursor: "pointer" }}
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
              <Th isNumeric></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Popup
        title="EXPENSE DELETE"
        desc="You are sure DELETE?"
        isOpen={isOpen}
        onClose={onClose}
        onSave={onSave}
      ></Popup>
    </>
  );
};
