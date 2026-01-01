import type { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router"

type modalProps = {
    title: string,
    setDifficulty: Dispatch<SetStateAction<string>>,
    onClose: () => void,
    setCategory: Dispatch<SetStateAction<string>>
}

const Modal = ({ title, setDifficulty, onClose, setCategory }: modalProps) => {

    const difficulties = ["Easy", "Medium", "Hard", "Random"]

    const navigate = useNavigate();

    const handleDifficultySelect = (difficulty: string) => {
        setDifficulty(difficulty)
        setCategory(title)
        navigate('/questions')
    }

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                </form>
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="py-4">Select a difficulty level:</p>
                <div className="flex flex-col gap-2">
                    {difficulties.map((difficulty) => (
                        <button
                            key={difficulty}
                            className="btn btn-outline hover:btn-primary rounded-lg"
                            onClick={() => handleDifficultySelect(difficulty)}
                        >
                            {difficulty}
                        </button>
                    ))}
                </div>
            </div>
        </dialog>
    )
}

export default Modal
