import { getRandomWord } from "../utils/word.js";
export default function NewGameButton(props) {
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