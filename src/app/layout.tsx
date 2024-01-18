import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { CodeProvider } from "@/contexts/CodeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AluraDev",
  description: "Challenge Frontend by Alura",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <CodeProvider>
        <body
          className={`p-4 md:p-8 xl:px-[10%] lg:max-h-[calc(100vh-16px)] bg-[#051D3B] overflow-x-hidden ${inter.className}`}
        >
          <Header />
          {children}
        </body>
      </CodeProvider>
    </html>
  )
}
