import { memo } from "react"

type CompAProps = {
    count: number
    setCount: (count: number) => void
}

const PureCompA = ({ count, setCount }: CompAProps) => {
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}


const compare = (prevProps: CompAProps, nextProps: CompAProps) => prevProps.count === nextProps.count

const CompA = memo(PureCompA, compare)

export default CompA