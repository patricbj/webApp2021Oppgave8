import { useState } from 'react'

export const Input = () => {
    const [input, setInput] = useState("")

    const handleChange = () => {
        const inputField = document.getElementById("testInput")
        setInput(inputField.value)
    }

    return (
        <section>
            <p>Input is: {input}</p>
            <input id="testInput" type="text" value={input} onChange={handleChange} placeholder="Start typing" />
        </section>
    )
}