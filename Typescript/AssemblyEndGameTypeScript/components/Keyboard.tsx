export default function KeyBoard(props) {
    if (props.gameStatus !== 'playing') {
        return (<></>);
    }
    return (
        <section className="keyboard">
            {props.alphabet.map((letter, index) => {
              const isGuessed = props.guessedLetters.includes(letter);
              const isCorrect = isGuessed && props.currentWord.includes(letter);
              const className = isGuessed ? (isCorrect ? 'correct-key' : 'wrong-key') : 'key';
              return ( <button key={index} className={className} onClick={() => props.onLetterClick(letter)}>
                    {letter}
                </button>)
})}
        </section>
    );
}