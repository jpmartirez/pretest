import type { Dispatch, SetStateAction } from "react"

type navbarProps = {
    setSearch: Dispatch<SetStateAction<string>>,
    search: string
}

const Navbar = ({setSearch, search}: navbarProps) => {
  return (
    <div className="navbar bg-primary/80 shadow-sm max-w-7xl mx-auto w-full rounded-md">
        <a href="/" className="flex-1 flex items-center pl-4">
            <img src="/logo.png" alt=""  className="size-8 lg:size-10"/>
            <a className="btn btn-ghost text-lg md:text-xl lg:text-2xl text-white">Pretest</a>
        </a>
        <div className="flex gap-2">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="dropdown dropdown-end">
            </div>
        </div>
    </div>
  )
}

export default Navbar