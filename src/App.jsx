import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Success from "./Pages/Success"
import Error from "./Pages/Error"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App