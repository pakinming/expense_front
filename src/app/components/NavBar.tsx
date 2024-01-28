"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { IRoute } from "../constants/routes";

interface INavBar {
  data: {
    hrefList: IRoute[];
  };
}

const NavBar = ({ data }: INavBar) => {
  const { hrefList } = data;
  const pathname = usePathname();

  return (
    <>
      <Flex flex={2} alignItems="center" justifyContent={"center"} mt={"3rem"}>
        <Stack direction="row" alignItems="center" gap="40px" spacing="10px">
          {hrefList.map(({ key, value }, index) => {
            const isSelected = pathname === value;

            return (
              <Container key={`nav_container_${index}`} alignContent={"center"}>
                <Link
                  href={value}
                  key={`nav_link_${index}`}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    textDecoration: "none",
                  }}
                >
                  <Box
                    fontSize={{ base: "small", lg: "xx-large" }}
                    color={isSelected ? "primary" : "gray"}
                  >
                    {key}
                  </Box>
                </Link>
              </Container>
            );
          })}
        </Stack>
      </Flex>
    </>
  );
};

export default NavBar;
