"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/app/theme";
import NavBar from "./components/NavBar";
import { routeList } from "./constants/routes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar
        data={{
          hrefList: routeList,
        }}
      ></NavBar>
      {children}
    </ChakraProvider>
  );
}
