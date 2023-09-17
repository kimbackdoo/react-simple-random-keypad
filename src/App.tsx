import { useState } from 'react'
import RandomKeyPad, { KeypadType } from './components/RandomKeyPad'

function App() {
    const [text, setText] = useState('')

    const handleKeypad = (key: KeypadType) => {
        if (key === '재배열') return
        if (key === 'X') {
            setText((prev) => prev.slice(0, -1))
            return
        }
        setText((prev) => `${prev}${key}`)
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <div>
                <input
                    style={{
                        padding: '10px',
                        border: '1px solid #000',
                        fontSize: '16px',
                    }}
                    value={text}
                />
                <RandomKeyPad onClick={handleKeypad} />
            </div>
        </div>
    )
}

export default App
