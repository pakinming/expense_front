
import * as React from 'react'

import NavBar from "./components/nav";
import { Providers } from "./providers";
import { routeList } from "@/app/constants/routes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar
          data={{
            hrefList: routeList,
          }}
        ></NavBar>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
