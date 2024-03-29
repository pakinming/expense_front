import * as React from "react";

import NavBar from "./components/NavBar";
import { Providers } from "./providers";
import { routeList } from "@/app/constants/routes";
import { Container } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}
