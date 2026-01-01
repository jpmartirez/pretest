import type { LucideIcon } from "lucide-react"

type cardProps = {
    title: string,
    description: string,
    icon: LucideIcon,
    color: string
}

const Card = ({title, description, icon:Icon, color}: cardProps) => {

  return (
    <div className="p-4 bg-base-100 border border-gray-400 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/40 max-w-80 cursor-pointer">
        <div className={`inline-block p-2 ${color} rounded-md`}>
            <Icon className="text-white"/>
        </div>
        <p className=" text-xl font-semibold ml-2 mt-4">
            {title}
        </p>
        <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
            {description}
        </p>
    </div>
  )
}

export default Card