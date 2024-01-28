// app/edit/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Button, Card, Center, Input, Stack } from '@chakra-ui/react'

export default function Page() {
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
  )
}