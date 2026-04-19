import type { JSX } from "react";

interface WordProps {
    word: string;
    guessedLetters: Array<string>;
    gameStatus: string;
}
export default function Word(props: WordProps):  JSX.Element {
    const letters = props.word.toUpperCase().split('');
    return (
        <section className="word">
            {letters.map((letter, index) => (
                <span key={index} className="letter">
                    {props.guessedLetters.includes(letter) || props.gameStatus === 'lost' ? letter : '_'}
                </span>
            ))}
        </section>
    );
}




