import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Questions from "./pages/Questions"
import { useState } from "react"
import { Toaster } from "react-hot-toast"


const App = () => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState<string>("");

  const [search, setSearch] = useState<string>("");


  return (
    <div>
      <Toaster/>
      <Navbar setSearch={setSearch} search={search}/>
      <Routes>
        <Route path="/" element={<Homepage search={search} setDifficulty={setDifficulty} setCategory={setCategory}/>}/>
        <Route path="/questions" element={<Questions category={category} difficulty={difficulty}/>}/>
      </Routes>
    </div>
  )
}

export default App