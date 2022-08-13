import React from "react"
import Slider from "./Components/Slider/"
import db from "./Components/Slider/data"

function App() {
  return (
    <div className="App">
      <Slider db={db} argColor={"#DB4545"} slTitle={"Akatsuki"} />
    </div>
  )
}

export default App
