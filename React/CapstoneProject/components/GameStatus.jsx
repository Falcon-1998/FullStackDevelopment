export default function GameStatus({gameStatus , isLastGuessInCorrect, farewellText}) { 
    if (gameStatus === 'won') {
    return (
            <section className="game-status game-status-won">
                <h2>You Win!</h2>
                <p>Well done! 🥳</p>
            </section>
    )
}
   else if (gameStatus === 'lost') {
    return (
        <section className="game-status game-status-lost">
            <h2>You Lose!</h2>
            <p>Try again! 🤞</p >
        </section>
    )}
    else {
        if (isLastGuessInCorrect === true) return ( <p className="farewell-text">{farewellText}</p> )   
        else return (  <></>)
    }
}