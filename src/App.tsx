import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// types
import { QuestionsState } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setError(null); // Reset any previous error

    try {
      const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS);

      if (newQuestions.length === 0) {
        setError('No questions found. Please try again later.');
        setLoading(false);
        setGameOver(true);
        return;
      }

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch quiz questions. Please try again.');
      setLoading(false);
      setGameOver(true);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>QUIZ</h1>
                {/* Add the "Give an Interview" button */}
                {!gameOver && userAnswers.length === TOTAL_QUESTIONS &&(
                  <button 
    className='give-interview-button' 
    onClick={() => window.location.href = 'http://localhost:3000/dashboard'}
    style={{
      backgroundColor: '#001f3f', // Dark navy blue background
      color: 'white', // White text
      padding: '10px 20px', // Padding for the button
      border: 'none', // No border
      borderRadius: '5px', // Rounded corners
      cursor: 'pointer', // Pointer cursor on hover
      fontSize: '16px', // Font size
      transition: 'background-color 0.3s ease', // Smooth transition
    }}
    onMouseOver={e => e.currentTarget.style.backgroundColor = '#001a33'} // Darker shade on hover
    onMouseOut={e => e.currentTarget.style.backgroundColor = '#001f3f'} // Original shade on mouse out
  >
    Give an Interview →
  </button>
        
        )}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startTrivia}>
            {loading ? 'Loading...' : 'Start'}
          </button>
        ) : null}

        {!gameOver && userAnswers.length === TOTAL_QUESTIONS && (
          <p className='score'>Final Score: {score} / {TOTAL_QUESTIONS}</p>
        )}

        {loading && <p>Loading Questions...</p>}
        {error && <p className="error">{error}</p>} {/* Show error message */}

        {!loading && !gameOver && questions.length > 0 && (
          <>
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          </>
        )}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        )}


      </Wrapper>
    </>
  );
};

export default App;