import { useQuery } from "@tanstack/react-query"

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
    incorrect_answers: any[]
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

    const categoryId = categoryMapping[category] || 9; // default to 9 if not found

    console.log(`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty.toLowerCase()}`)

    const { isPending, error, data } = useQuery({
        queryKey: ['questions'],
        queryFn: () =>
        fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty.toLowerCase()}`).then((res) =>
            res.json(),
        ),
    })

    if(isPending) return <div className="min-h-[80vh] w-full flex justify-center items-center">
        <span className="loading loading-spinner text-primary loading-xl"></span>
    </div>

    if(error) return <div className="min-h-[80vh] w-full flex justify-center items-center">
       <p className="text-xl font-semibold ">An error has occurred: ${error.message}</p>
    </div>

    return (
        <div>
        <h1>{category || "General Knowledge"}</h1>
        <p>{data.results.map((e: TriviaQuestion, index:number) => (
            <div key={index}>
                {e.question}
            </div>
        ))}</p>
        </div>
    )
}

export default Questions