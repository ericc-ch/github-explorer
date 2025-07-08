import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

const repo = process.env.GITHUB_REPOSITORY
const base = repo ? `/${repo.split("/")[1]}/` : "/"

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base,
})
