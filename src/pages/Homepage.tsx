import { useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import Card from "../components/Card"
import Modal from "../components/Modal"
import { categories } from "../data/categories"

type homepageProps = {
    search: string,
    setDifficulty: Dispatch<SetStateAction<string>>,
    setCategory: Dispatch<SetStateAction<string>>
}

const Homepage = ({ search, setDifficulty, setCategory }: homepageProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("")

    const handleCategorySelect = (categoryName: string) => {
        setSelectedCategory(categoryName)
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null
        modal?.showModal()
    }

    const handleCloseModal = () => {
        setSelectedCategory("")
    }

    return (
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 px-5 mt-5">
            <div className="space-y-4 flex flex-col items-center">
                <h1 className="font-bold text-xl md:text-2xl lg:text-4xl ">Pick a Challenge</h1>
                <p className="text-gray-400 max-md:text-sm">Choose a category to start your knowledge journey.</p>
            </div>

            <div className="flex items-center flex-wrap gap-5 justify-center">
                {categories
                    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
                    .map((c) => (
                        <div key={c.name} onClick={() => handleCategorySelect(c.name)}>
                            <Card title={c.name} description={c.description} icon={c.icon} color={c.color} />
                        </div>
                    ))}
            </div>

            <Modal
                title={selectedCategory}
                setDifficulty={setDifficulty}
                onClose={handleCloseModal}
                setCategory={setCategory}
            />
        </div>
    )
}

export default Homepage
