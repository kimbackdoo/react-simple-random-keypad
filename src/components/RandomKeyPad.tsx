import { HTMLAttributes, useState } from 'react'
import { shuffle } from '../utils'
import { css } from '@emotion/react'

export type KeypadType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '재배열' | 'X'

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    onClick?: (key: KeypadType) => void
}

const defaultKeypad = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export default function RandomKeyPad({ onClick, ...rest }: Props) {
    const [keypad, setKeypad] = useState<KeypadType[]>(generateRandomKeypad(defaultKeypad))

    const handleClick = (key: KeypadType) => {
        if (key === '재배열') setKeypad(generateRandomKeypad(defaultKeypad))
        onClick?.(key)
    }

    return (
        <div css={wrapperCss} {...rest}>
            {keypad.map((key) => (
                <button
                    key={key}
                    css={buttonCss}
                    className={getResetClassName(key)}
                    onClick={() => handleClick(key)}
                >
                    {key}
                </button>
            ))}
        </div>
    )
}

function generateRandomKeypad(keypad: string[]): KeypadType[] {
    const [first, ...rest] = shuffle(keypad)
    return [...rest, '재배열', first, 'X']
}

function getResetClassName(key: KeypadType): string {
    return key === '재배열' ? 'reset' : ''
}

const wrapperCss = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #fff;
`

const buttonCss = css`
    padding: 15px 30px;
    border: none;
    background-color: #fff;
    font-weight: 500;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.2s;

    &.reset {
        font-weight: 400;
        font-size: 14px;
        color: #828282;
    }

    :active {
        background-color: #e9eaea;
    }
`
