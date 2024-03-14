import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { findUser } from "@/actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memotion.",
  description: "Note your life.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser } = getKindeServerSession();
  const authData = await getUser();
  const user = authData && (await findUser(authData?.id as string));

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${user?.colorScheme || "theme-violet"}`}
      >
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
