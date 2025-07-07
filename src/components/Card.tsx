import { useState } from 'react'

type CardProps = { 
    heading: string
}

const Card = ({heading}: CardProps) => {
    const [hasLiked, setHasLiked] = useState<boolean>(false);

    return (
        <div className="card">
            <h2> {heading} </h2>

           <button onClick={() => setHasLiked(!hasLiked)}>
            {hasLiked ? "💚" : "🤍"}
           </button>
        </div>
    )
}

export default Card