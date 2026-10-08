import fs from "node:fs"
import path from "node:path"
import ScreenGallery from "../components/screen-gallery"

export default function Home() {
  const screens = fs
    .readdirSync(path.join(process.cwd(), "public/screens"))
    .filter((file) => file.endsWith(".html"))
    .map((file) => file.replace(/\.html$/, ""))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  return <ScreenGallery screens={screens} />
}
