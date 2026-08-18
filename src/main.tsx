import * as React from "react"
import { createRoot } from "react-dom/client"
import { ThemeUIProvider } from "theme-ui"
import App from "./app"
import theme from "./theme"

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element was not found")
}

createRoot(root).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <App />
    </ThemeUIProvider>
  </React.StrictMode>,
)
