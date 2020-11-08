import React from "react"
import WithProgressBar from "./WithProgressBar"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <div className="tile red">section</div>
      <WithProgressBar>
        <div className="tile green">section</div>
      </WithProgressBar>
      <div className="tile blue">section</div>
    </div>
  )
}

export default App
