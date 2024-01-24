"use client";

import { Link } from "@chakra-ui/next-js";
import { Container, Flex, Stack, Text } from "@chakra-ui/react";

interface INavBar {
  data: {
    hrefList: string[];
  };
}

const NavBar = ({ data }: INavBar) => {
  const { hrefList } = data;

  return (
    <>
      <Flex flex={2} alignItems="center" gap="2" pl="40px">
        <Stack direction="row" alignItems="center" gap="40px" spacing="0px">
          {hrefList.map((item, index) => (
            <Container key={`nav_container_${index}`}>
              <Link href={item} key={`nav_link_${index}`}>
                <Text variant="lg">{item}</Text>
              </Link>
            </Container>
          ))}
        </Stack>
      </Flex>
    </>
  );
};

export default NavBar;
