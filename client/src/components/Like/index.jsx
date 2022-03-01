import { useState } from "react"

export default function Like() {

    const [like, setLike] = useState(0)

    const increaseLikes = () => {
        setLike((current) => current+1)
    }

    return (
        <div>
            <button onClick={increaseLikes}>{like}👍</button>
        </div>
    )
}