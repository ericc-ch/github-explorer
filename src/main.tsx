import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import invariant from "tiny-invariant"

import { App, Providers } from "./app.tsx"
// Styling
import "./styles/global.css"

const rootElement = document.querySelector("#root")
invariant(rootElement, "Root element not found")

createRoot(rootElement).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
