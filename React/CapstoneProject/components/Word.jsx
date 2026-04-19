export default function Word(props) {
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




