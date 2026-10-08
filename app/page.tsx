import fs from "node:fs"
import path from "node:path"
import ScreenGallery from "../components/screen-gallery"

export default function Home() {
  const directory = path.join(process.cwd(), "public", "screens")
  const screens = fs.readdirSync(directory).filter((file) => file.endsWith(".html")).map((file) => file.slice(0, -5)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  return <ScreenGallery screens={screens} />
}
