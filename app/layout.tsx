import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "A.J. Silicon Learning Platform",
  description: "Screen library for the A.J. Silicon learning platform.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
