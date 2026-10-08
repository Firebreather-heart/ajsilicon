import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "A.J. Silicon | Learning Platform",
  description: "A focused learning platform for professional certification, live classes, practice, and progress.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
