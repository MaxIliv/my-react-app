import { clsx } from 'clsx';
import { FC, PropsWithChildren, useCallback, useId, useState } from 'react';
import styles from './Wordle.module.css';

type Letter = {
  letter: string;
  isCorrectPlace: boolean;
  isInWord: boolean
}

type Guess = {
  letters: Letter[];
  word: string;
}


const LetterDisplay = ({ letter, isCorrectPlace, isInWord }: Letter) => {
  const className = clsx(styles.letter, { [styles.yellow]: isInWord, [styles.green]: isCorrectPlace });

  return (
    <span className={className}>{ letter }</span>
  )
}


const GuessDisplay: FC<PropsWithChildren>= ({ children }) => {
  return (<div className={styles.word}>{children}</div>);
}



export default function Wordle() {
  const word = 'money';
  const [guesses, setGuesses] = useState<Guess[]>([]);

  const handleSubmit = useCallback((formData: FormData) => {
    const guess = formData.get('guess') as string;

    const newGuess: Guess = {
      letters: [],
      word: guess,
    }

    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i].toLowerCase();
      const isCorrectPlace = word[i] === letter;

      const newLetter: Letter = {
        letter,
        isCorrectPlace: word[i] === letter,
        isInWord: isCorrectPlace || word.indexOf(letter) > -1,
      }

      newGuess.letters.push(newLetter);
    }

    setGuesses([
      ...guesses,
      newGuess
    ])
  }, [guesses]);

  const id = useId();

  const guessesList = guesses.map(({ letters, word }) =>
    <GuessDisplay key={word}>
      { letters.map((l) => <LetterDisplay {...l} key={l.letter} />)}
    </GuessDisplay>)

  return (
    <>
      <form action={handleSubmit}>
        <label htmlFor={id}>Guess</label>
        <input type="text" name="guess" id="" />
      </form>

      { guessesList }
    </>
  )

}