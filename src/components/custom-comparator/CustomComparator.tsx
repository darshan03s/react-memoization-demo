import { useState } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

const CustomComparator = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    return (
        <div className="flex flex-col gap-4 h-full justify-center items-center">
            <CompA count={countA} setCount={setCountA} />
            <CompB count={countB} setCount={setCountB} />
        </div>
    )
}

export default CustomComparator