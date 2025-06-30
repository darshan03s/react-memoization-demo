import { memo } from "react"

type CompBProps = {
    count: number
    setCount: (count: number) => void
}

const PureCompB = ({ count, setCount }: CompBProps) => {
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}

const compare = (prevProps: CompBProps, nextProps: CompBProps) => prevProps.count === nextProps.count

const CompB = memo(PureCompB, compare)

export default CompB