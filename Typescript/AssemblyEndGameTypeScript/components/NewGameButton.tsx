import type { JSX } from "react";
import { getRandomWord } from "../utils/word.ts";
interface NewGameButtonProps {
    gameStatus: string;
    setCurrentWord: React.Dispatch<React.SetStateAction<string>>;
    setGameStatus: React.Dispatch<React.SetStateAction<string>>;
    setGuessedLetters: React.Dispatch<React.SetStateAction<Array<string>>>;
    setWrongGuessCount: React.Dispatch<React.SetStateAction<number>>;
}
export default function NewGameButton(props: NewGameButtonProps) : JSX.Element {
    function handleNewGame() {
        props.setGameStatus('playing');
        props.setGuessedLetters([]);
        props.setWrongGuessCount(0);
        props.setCurrentWord(getRandomWord());
    }
    if (props.gameStatus !== 'playing') {
    return (
        <section className="new-game-container">
        <button className="new-game-button" onClick={handleNewGame}>
            New Game
        </button>
        </section>
    )
  }
    else {
        return (<></>);
    }
}