// @flow
import React, { useState } from "react"
import { ErrorBoundary } from "./ErrorBoundary"
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from "./Header"
import { LimioProvider } from "@limio/sdk"
import LimioHeader from "./components/limio-header"
import GroupedOffers from "./components/grouped-offers"
import LimioFooter from "./components/limio-footer"
import "./App.css"

function App() {
  const endpoint =  "https://localhost:9002"
  const [key] = useState(0)
  const [basket, setBasket] = useState({ items: [] })

  return (
    <div>
      <Header endpoint={endpoint} />
      <div>
        <ErrorBoundary>
          <LimioProvider key={key}>
            <LimioHeader  basket={basket}  />
            <GroupedOffers/>
            <LimioFooter />
          </LimioProvider>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
