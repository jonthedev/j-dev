import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import ReactGA from "react-ga4"

ReactGA.initialize(`${import.meta.env.APP_GOOGLE_ANALYTICS_ID}`)
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Hit homepage",
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
