import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import QuestionCard from "../components/QuestionCard"
import { useState } from "react"

type questionProps = {
    category: string,
    difficulty: string
}

interface TriviaQuestion {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface TriviaResponse {
    response_code: number,
    results: TriviaQuestion[]
}

const categoryMapping: Record<string, number> = {
    "General Knowledge": 9,
    "Entertainment: Books": 10,
    "Entertainment: Film": 11,
    "Entertainment: Music": 12,
    "History": 23,
    "Science: Mathematics": 19,
    "Science and Nature": 17,
    "Science: Computers": 18,
    "Mythology": 20,
    "Geography": 22,
    "Animals": 27,
    "Vehicles": 28
}

const Questions = ({category, difficulty}: questionProps) => {
    const navigate = useNavigate();
    const categoryId = categoryMapping[category] || 9;

    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    const difficultyConfig: string = difficulty.toLowerCase() === "random" ? "" : difficulty.toLowerCase();

    const { isPending, error, data } = useQuery<TriviaResponse>({
        queryKey: ['questions', categoryId, difficulty],
        queryFn: async () => {
            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficultyConfig}`);
            const data: TriviaResponse = await response.json();
            return data;
        },
    })

    

    
    if (!difficulty || !category) navigate("/");

    if(isPending) return <div className="min-h-[80vh] w-full flex justify-center items-center">
        <span className="loading loading-spinner text-primary loading-xl"></span>
    </div>

    if(error) return <div className="min-h-[80vh] w-full flex justify-center items-center">
       <p className="text-xl font-semibold ">An error has occurred: ${error.message}</p>
    </div>

    return (
        <div className="max-w-4xl mx-auto p-5">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                    {category}
                </h1>
                <p className="text-gray-500 mt-2 capitalize">{difficulty} Mode</p>
            </div>
            
            <div className="space-y-6">
                {data.results.map((question: TriviaQuestion, index: number) => (
                    <QuestionCard 
                        key={index} 
                        question={question} 
                        index={index}
                        setScore={setScore} 
                        setCount={setCount}
                    />
                ))}
            </div>

            <dialog id="my_modal_1" className={`modal ${count===10 && 'modal-open'}`}>
                <div className="modal-box bg-gray-600  text-white border-0 shadow-2xl">
                    <div className="text-center">
                        <div className="mb-4">
                            {score >= 8 ? (
                                <div className="text-6xl">🏆</div>
                            ) : score >= 5 ? (
                                <div className="text-6xl">🎉</div>
                            ) : (
                                <div className="text-6xl">💪</div>
                            )}
                        </div>
                        <h3 className="font-bold text-2xl mb-2">
                            {score >= 8 ? "Excellent!" : score >= 5 ? "Good Job!" : "Keep Trying!"}
                        </h3>
                        <p className="text-lg opacity-90 mb-4">Your Score</p>
                        <div className="text-4xl font-bold mb-4">{score} / 10</div>
                        <div className="w-full bg-white/20 rounded-full h-3 mb-6">
                            <div 
                                className="bg-white h-3 rounded-full transition-all duration-1000 ease-out" 
                                style={{ width: `${(score / 10) * 100}%` }}
                            ></div>
                        </div>
                        <p className="text-sm opacity-75">
                            {score >= 8 ? "You're a trivia master!" : score >= 5 ? "Not bad, keep it up!" : "Practice makes perfect!"}
                        </p>
                    </div>
                    <div className="modal-action justify-center">
                        <form method="dialog">
                            <a href="/" className="btn btn-outline btn-white text-white border-white hover:bg-white hover:text-purple-600">
                                Play Again
                            </a>
                        </form>
                    </div>
                </div>
            </dialog> 
        </div>
    )
}

export default Questions
