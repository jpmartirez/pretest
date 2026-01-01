import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Questions from "./pages/Questions"
import { useState } from "react"

const App = () => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState<string>("");

  const [search, setSearch] = useState<string>("");


  return (
    <div>
      <Navbar setSearch={setSearch} search={search}/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/questions" element={<Questions category={category}/>}/>
      </Routes>
    </div>
  )
}

export default App