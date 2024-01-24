"use client";

import { Link } from "@chakra-ui/next-js";
import { Container, Flex, Stack, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { IRoute, routes } from "../constants/routes";

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
      <Flex flex={2} alignItems="center" gap="2" pl="40px">
        <Stack direction="row" alignItems="center" gap="40px" spacing="0px">
          {hrefList.map(({ key, value }, index) => {
            const isSelected = pathname === `value`;

            return (
              <Container key={`nav_container_${index}`}>

               
                <Link href={value} key={`nav_link_${index}`}>
                  <Text
                    fontSize={{
                      base: "16px",
                      md: "40px",
                      lg: "56px",
                      xl: "60px",
                    }}
                    color={isSelected ? "peru" : "GrayText"}
                  >
                    {key}
                  </Text>
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
