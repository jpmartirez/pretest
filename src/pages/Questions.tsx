type questionProps = {
    category: string
}

const Questions = ({category}: questionProps) => {
  return (
    <div>{category}</div>
  )
}

export default Questions