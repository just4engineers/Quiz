import { shuffleArray } from './utils';
import questionsData from './question.json'; // Import your local questions JSON file

// Types for the quiz questions
export type Question = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

// Extend Question type with 'answers' which is the shuffled list of all possible answers
export type QuestionsState = Question & { answers: string[] };

// Fetch questions from the local JSON (without filtering by difficulty)
export const fetchQuizQuestions = async (amount: number): Promise<QuestionsState[]> => {
  return new Promise((resolve, reject) => {
    try {
      console.log('Fetching quiz questions...');
      console.log('Imported Questions Data:', questionsData);

      // Shuffle all the questions
      const shuffledQuestions = shuffleArray(questionsData);
      console.log('Shuffled Questions:', shuffledQuestions);

      // Limit to the requested amount of questions
      const limitedQuestions = shuffledQuestions.slice(0, amount);
      console.log('Limited Questions:', limitedQuestions);

      if (limitedQuestions.length === 0) {
        throw new Error('No questions available.');
      }

      const quizQuestions = limitedQuestions.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
      }));

      resolve(quizQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
      reject(error);
    }
  });
};
