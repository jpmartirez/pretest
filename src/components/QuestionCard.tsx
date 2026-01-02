import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import he from 'he'

interface TriviaQuestion {
    type: string
    difficulty: string
    category: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

interface QuestionCardProps {
    question: TriviaQuestion
    index: number,
    setScore: Dispatch<SetStateAction<number>>,
    setCount: Dispatch<SetStateAction<number>>
}

const QuestionCard = ({ question, index, setScore, setCount }: QuestionCardProps) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([])

    useEffect(()=>{
        setShuffledAnswers([
        question.correct_answer,
        ...question.incorrect_answers
    ].sort(() => Math.random() - 0.5))
    }, [])

    useEffect(()=>{
        if(isCorrect) setScore(prev=>prev+1)
        if(selectedAnswer) setCount(prev=>prev+1)
        console.log("HI")
    }, [isCorrect, setScore, selectedAnswer])

    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer)
        setIsCorrect(answer === question.correct_answer)
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case "easy": return "bg-green-500"
            case "medium": return "bg-yellow-500"
            case "hard": return "bg-red-500"
            default: return "bg-gray-500"
        }
    }

    const getCardGradient = (index: number) => {
        const gradients = [
            "from-violet-500 to-purple-600",
            "from-blue-500 to-cyan-600",
            "from-emerald-500 to-teal-600",
            "from-orange-500 to-amber-600",
            "from-pink-500 to-rose-600",
            "from-indigo-500 to-blue-600",
            "from-cyan-500 to-sky-600",
            "from-amber-500 to-orange-600",
            "from-lime-500 to-green-600",
            "from-fuchsia-500 to-pink-600"
        ]
        return gradients[index % gradients.length]
    }

    const getAnswerButtonStyle = (answer: string) => {
        if (!selectedAnswer) return "btn-outline hover:btn-primary"
        if (answer === question.correct_answer) return "btn-success text-white"
        if (answer === selectedAnswer && answer !== question.correct_answer) return "btn-error text-white"
        return "btn-outline opacity-50"
    }

    return (
        <div className={`card bg-linear-to-r ${getCardGradient(index)} text-white shadow-xl overflow-hidden`}>
            <div className="card-body p-6">
                <div className="flex justify-between items-start mb-4">
                    <span className={`badge ${getDifficultyColor(question.difficulty)} text-white font-semibold px-3 py-1 rounded-full`}>
                        {question.difficulty}
                    </span>
                    <span className="text-sm opacity-75 font-medium">
                        Question {index + 1}
                    </span>
                </div>

                <h2 className="card-title text-xl md:text-2xl font-bold mb-6 text-white leading-relaxed">
                    {he.decode(question.question)}
                </h2>

                <div className="space-y-3 mt-4">
                    {shuffledAnswers.map((answer, answerIndex) => (
                        <button
                            key={answerIndex}
                            className={`btn w-full text-left justify-start h-auto py-4 px-5 text-base font-medium transition-all duration-300 ${getAnswerButtonStyle(answer)}`}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={selectedAnswer !== null}
                        >
                            <span className="mr-3 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 font-bold text-sm">
                                {String.fromCharCode(65 + answerIndex)}
                            </span>
                            {he.decode(answer)}
                        </button>
                    ))}
                </div>

                {selectedAnswer && (
                    <div className={`mt-6 p-4 rounded-lg ${isCorrect ? "bg-green-900/50 border border-green-400" : "bg-red-900/50 border border-red-400"}`}>
                        <p className="font-semibold text-lg">
                            {isCorrect ? "🎉 Correct! Great job!" : `❌ Incorrect! The correct answer is: ${he.decode(question.correct_answer)}`}
                        </p>
                    </div>
                )}
            </div>

            <div className="h-1 bg-white/20">
                <div className="h-full bg-white/40 animate-pulse"></div>
            </div>
        </div>
    )
}

export default QuestionCard

