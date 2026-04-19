import GameStatus from "./GameStatus.tsx";  
import LanguageChips from "./LanguageChips.tsx";
import Word from "./Word.jsx";
import KeyBoard from "./Keyboard.jsx";
import NewGameButton from "./NewGameButton.jsx";
import { getFarewellText } from "../utils/getFarewellText.js";
import { getRandomWord } from "../utils/word.js";
import {useState} from "react";

export default function  Main() {   
    const [currentWord, setCurrentWord] = useState<string>(getRandomWord());
    const [gameStatus, setGameStatus] = useState<string>('playing'); // 'playing', 'won', 'lost'
    const [guessedLetters, setGuessedLetters] = useState<Array<string>>([]);
    const [wrongGuessCount, setWrongGuessCount] = useState<number>(0);
    const lastguessedLetter: string | null = guessedLetters.length > 0 ? guessedLetters[guessedLetters.length - 1] : null ;
    const isLastGuessInCorrect : boolean | null = lastguessedLetter ? !currentWord.includes(lastguessedLetter) : null;
    const maxWrongGuesses: number = 8;
    console.log('', currentWord, gameStatus, guessedLetters, wrongGuessCount);
    
    function addGuessedLetter(letter : string) : void{
        if(!guessedLetters.includes(letter)) {
            const newGuessedLetters = [...guessedLetters, letter];
            setGuessedLetters(newGuessedLetters);
            
            let newWrongGuessCount = wrongGuessCount;
            if(!currentWord.includes(letter)) {
                newWrongGuessCount = wrongGuessCount + 1;
                setWrongGuessCount(newWrongGuessCount);
            }
            
            // Check win/loss conditions immediately
            if (newWrongGuessCount >= maxWrongGuesses) {
                setGameStatus('lost');
            } else {
                // Get unique letters in the word
                const uniqueLettersInWord = new Set(currentWord.toUpperCase().split(''));
                // Check if all unique letters have been guessed correctly
                const allLettersGuessed = Array.from(uniqueLettersInWord).every(letter => newGuessedLetters.includes(letter));
                if (allLettersGuessed) {
                    setGameStatus('won');
                }
            }
        }
    };
    const alphabet : Array<string>= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const languages: Array<string> = ['HTML', 'CSS', 'Javascript', 'React', 'Typescript', 'Node.js', 'Python', 'Assembly'];
    const farewellText: string = wrongGuessCount > 0 ? getFarewellText(languages[wrongGuessCount - 1]) : '';
    return (
        <main className="game-main">
            <GameStatus gameStatus={gameStatus} isLastGuessInCorrect={isLastGuessInCorrect} farewellText={farewellText} />
            <LanguageChips wrongGuessCount={wrongGuessCount} languages={languages}/>
            <Word word={currentWord} guessedLetters={guessedLetters} gameStatus={gameStatus}/>
            <KeyBoard gameStatus={gameStatus} alphabet={alphabet} guessedLetters={guessedLetters} onLetterClick={addGuessedLetter} currentWord={currentWord}/>
            <NewGameButton gameStatus={gameStatus} setCurrentWord={setCurrentWord} setGameStatus={setGameStatus} setGuessedLetters={setGuessedLetters} setWrongGuessCount={setWrongGuessCount} />
        </main>
    );
}