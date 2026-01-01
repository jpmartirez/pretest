import Card from "../components/Card"
import { categories } from "../data/categories"



const Homepage = () => {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 px-5 mt-5">
        <div className="space-y-4">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl ">Pick a Challenge</h1>
            <p className="text-gray-400 max-md:text-sm">Choose a category to start your knowledge journey.</p>
        </div>

        <div className="flex items-center flex-wrap gap-5 justify-center">
            {categories.map((c) =>(
                <Card title={c.name} description={c.description} icon={c.icon} color={c.color}/>
            ))}
        </div>
    </div>
  )
}

export default Homepage