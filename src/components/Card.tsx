import { useEffect, useState } from 'react'

type CardProps = { 
    heading: string
}

const Card = ({heading}: CardProps) => {
    const [count, setCount] = useState<number>(0);
    const [hasLiked, setHasLiked] = useState<boolean>(false);

    useEffect(() => {
        console.log(`${heading} has been liked: ${hasLiked}`);
    }, [hasLiked, heading]);

    return (
        <div className="card" onClick={() => setCount((prevState) => prevState + 1)}>
            <h2> {heading} - {count}</h2>

           <button onClick={() => setHasLiked((prevState) => !prevState)}>
            {hasLiked ? "💚" : "🤍"}
           </button>
        </div>
    )
}

export default Card