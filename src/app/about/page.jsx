"use client"

import { useState } from "react"

export default function About() {
    const [clicked, setClicked] = useState(false)
    
    return (
        <div>
            <h1 onClick={() => setClicked(true)} 
                className={`${clicked ? "text-green-500" : "text-blue-500"}`}            
            >A propos</h1>
        </div>
    )
}