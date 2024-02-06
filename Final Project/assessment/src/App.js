/*import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: '1. What keyword is used to declare a constant in Java?',
      answerWithMissingLetters: 'Answer: F _ n _ l',
      correctAnswer: 'final', // Provide the correct answer
    },
    {
      question: '2. What is the term for combining two or more strings in Java?',
      answerWithMissingLetters: 'Answer: C _ n _ c _ t _ _ n',
      correctAnswer: 'concatenation',
    },
    {
      question: '3. What is the process of converting a value of one data type to another called?',
      answerWithMissingLetters: 'Answer: T _ p _ c _ s t _ n g',
      correctAnswer: 'typecasting',
    },
    {
      question: '4. What is the term for a method that is automatically called when an object is created from a class?',
      answerWithMissingLetters: 'Answer: C _ n s t r _ c t _ r',
      correctAnswer: 'constructor',
    },
    {
      question: '5. What is the process of defining multiple methods in a class with the same name but different parameters?',
      answerWithMissingLetters: 'Answer: O _ e r l _ a d _ n g',
      correctAnswer: 'overloading',
    },
    {
      question: '6. What keyword is used to specify a method does not return a value?',
      answerWithMissingLetters: 'Answer: V _ i _',
      correctAnswer: 'Void',
    },
    {
      question: '7. What is the Java keyword for inheritance?',
      answerWithMissingLetters: 'Answer: E _ t _ n _s',
      correctAnswer: 'Extends',
    },
    {
      question: '8. What keyword is used to create a copy of an object in Java?',
      answerWithMissingLetters: 'Answer: C _ o _ e',
      correctAnswer: 'Clone',
    },
    {
      question: '9.  What is the Java keyword for declaring a method but not providing an implementation?',
      answerWithMissingLetters: 'Answer: A _ s _ r _ c t',
      correctAnswer: 'Abstract',
    },
    {
      question: '10. What type of exception is thrown when an arithmetic operation results in a value too large to represent?',
      answerWithMissingLetters: 'Answer: A _ i _ h _ et _ cE _ c _ p _ i _n ',
      correctAnswer: 'ArithmeticException',
    },


  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [userAnswers, setUserAnswers] = useState(Array(currentQuestion.correctAnswer.length).fill(''));
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSubmitClick = () => {
    // Check if the user's answers match the correct answer (case-insensitive)
    const userAnswerLower = userAnswers.join('').toLowerCase();
    const correctAnswerLower = currentQuestion.correctAnswer.toLowerCase();
    if (userAnswerLower === correctAnswerLower) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const handleNextClick = () => {
    // Move to the next question and reset answer state
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswers(Array(questions[currentQuestionIndex + 1].correctAnswer.length).fill(''));
      setIsAnswerCorrect(false);
    }
  };

  return (
    <div className="container">
      <div className="questions">
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
          </div>
        ))}
      </div>

      <div className="answers">
        <div>
          <p>
            {currentQuestion.answerWithMissingLetters.replace(/_/g, (_, index) => userAnswers[index] || '_')}
          </p>
          {userAnswers.map((answer, index) => (
            <input
              key={index}
              type="text"
              value={answer}
              onChange={(event) => handleAnswerChange(index, event)}
              placeholder="_"
            />
          ))}
          <button onClick={handleSubmitClick}>Submit</button>
          {isAnswerCorrect && <p>Correct!</p>}
          {!isAnswerCorrect && isAnswerCorrect !== null && <p>Incorrect. Try again!</p>}
        </div>
      </div>

      <button onClick={handleNextClick} disabled={currentQuestionIndex === questions.length - 1}>
        Next
      </button>
    </div>
  );
}

export default App;*/

/*import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: '1. What keyword is used to declare a constant in Java?',
      answerWithMissingLetters: 'Answer: F _ n _ l',
      correctAnswer: 'final', // Provide the correct answer
    },
    {
      question: '2. What is the term for combining two or more strings in Java?',
      answerWithMissingLetters: 'Answer: C _ n _ c _ t _ _ n',
      correctAnswer: 'concatenation',
    },
    {
      question: '3. What is the process of converting a value of one data type to another called?',
      answerWithMissingLetters: 'Answer: T _ p _ c _ s t _ n g',
      correctAnswer: 'typecasting',
    },
    {
      question: '4. What is the term for a method that is automatically called when an object is created from a class?',
      answerWithMissingLetters: 'Answer: C _ n s t r _ c t _ r',
      correctAnswer: 'constructor',
    },
    {
      question: '5. What is the process of defining multiple methods in a class with the same name but different parameters?',
      answerWithMissingLetters: 'Answer: O _ e r l _ a d _ n g',
      correctAnswer: 'overloading',
    },
    {
      question: '6. What keyword is used to specify a method does not return a value?',
      answerWithMissingLetters: 'Answer: V _ i _',
      correctAnswer: 'Void',
    },
    {
      question: '7. What is the Java keyword for inheritance?',
      answerWithMissingLetters: 'Answer: E _ t _ n _s',
      correctAnswer: 'Extends',
    },
    {
      question: '8. What keyword is used to create a copy of an object in Java?',
      answerWithMissingLetters: 'Answer: C _ o _ e',
      correctAnswer: 'Clone',
    },
    {
      question: '9.  What is the Java keyword for declaring a method but not providing an implementation?',
      answerWithMissingLetters: 'Answer: A _ s _ r _ c t',
      correctAnswer: 'Abstract',
    },
    {
      question: '10. What type of exception is thrown when an arithmetic operation results in a value too large to represent?',
      answerWithMissingLetters: 'Answer: A _ i _ h _ et _ cE _ c _ p _ i _n ',
      correctAnswer: 'ArithmeticException',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [userAnswers, setUserAnswers] = useState(Array(currentQuestion.correctAnswer.length).fill(''));
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSubmitClick = () => {
    // Check if the user's answers match the correct answer (case-insensitive)
    const userAnswerLower = userAnswers.join('').toLowerCase();
    const correctAnswerLower = currentQuestion.correctAnswer.toLowerCase();
    setIsAnswerCorrect(userAnswerLower === correctAnswerLower);
  };

  return (
    <div className="container">
      <div className="questions">
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
          </div>
        ))}
      </div>

      <div className="answers">
        <div>
          <p>
            {currentQuestion.answerWithMissingLetters.replace(/_/g, (_, index) => userAnswers[index] || '_')}
          </p>
          {isAnswerCorrect && (
            <div>
              <p>Correct!</p>
              <p>Correct Answer: {currentQuestion.correctAnswer}</p>
            </div>
          )}
          {!isAnswerCorrect && isAnswerCorrect !== null && <p>Incorrect. Try again!</p>}
        </div>
      </div>
    </div>
  );
}

export default App;*/

/*import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: '1. What keyword is used to declare a constant in Java?',
      answerWithMissingLetters: 'Answer: F _ n _ l',
      correctAnswer: 'final', // Provide the correct answer
    },
    {
      question: '2. What is the term for combining two or more strings in Java?',
      answerWithMissingLetters: 'Answer: C _ n _ c _ t _ _ n',
      correctAnswer: 'concatenation',
    },
    // ... (other questions)
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [userAnswers, setUserAnswers] = useState(Array(currentQuestion.correctAnswer.length).fill(''));
  const [savedAnswers, setSavedAnswers] = useState(Array(questions.length).fill(''));

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSaveClick = () => {
    setSavedAnswers((prevSavedAnswers) => {
      const newSavedAnswers = [...prevSavedAnswers];
      newSavedAnswers[currentQuestionIndex] = userAnswers.join('');
      return newSavedAnswers;
    });
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswers(Array(questions[currentQuestionIndex + 1].correctAnswer.length).fill(''));
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswers(savedAnswers[currentQuestionIndex - 1].split(''));
    }
  };

  return (
    <div className="container">
      <div className="questions">
        <div>
          <p>{currentQuestion.question}</p>
        </div>
      </div>

      <div className="answers">
        <div>
          <p>
            {currentQuestion.answerWithMissingLetters.replace(/_/g, (_, index) => userAnswers[index] || '_')}
          </p>
          {userAnswers.map((answer, index) => (
            <input
              key={index}
              type="text"
              value={answer}
              onChange={(event) => handleAnswerChange(index, event)}
              placeholder="_"
            />
          ))}
          <div className="button-container">
            <button onClick={handleSaveClick}>Save Answer</button>
            <button onClick={handlePreviousClick} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button onClick={handleNextClick} disabled={currentQuestionIndex === questions.length - 1}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: '1. What is the C keyword for declaring a function?',
      answerWithMissingLetters: 'Answer: V_I_',
      correctAnswer: 'VOID',
    },
    {
      question: '2. Which C keyword is used to terminate a loop prematurely?',
      answerWithMissingLetters: 'Answer: B_E_K',
      correctAnswer: 'BREAK',
    },
    {
      question: '3. Loop that runs until a condition is false?',
      answerWithMissingLetters: 'Answer: W_I_E',
      correctAnswer: 'WHILE',
    },
    {
      question: '4. Which operator is used for equality comparison?',
      answerWithMissingLetters: 'Answer: E_U_L',
      correctAnswer: 'EQUAL',
    },
    {
      question: '5. Which function is used to read input from the keyboard?',
      answerWithMissingLetters: 'Answer: S_A_F',
      correctAnswer: 'SCANF',
    },
    {
      question: '6. Which function is used to allocate memory for an array of an elements?',
      answerWithMissingLetters: 'Answer: C_L_O_',
      correctAnswer: 'CALLOC',
    },
    {
      question: '7. Which keyword is used to define a macro?',
      answerWithMissingLetters: 'Answer: _D_F_N_',
      correctAnswer: '#DEFINE',
    },
    {
      question: '8. What is the purpose of ELSE keyword?',
      answerWithMissingLetters: 'Answer: A_T_R_A_I_E',
      correctAnswer: 'ALTERNATIVE',
    },
    {
      question: '9. The operator || (double vertical bar) indicates?',
      answerWithMissingLetters: 'Answer: L_G_C_L_R',
      correctAnswer: 'LOGICALOR',
    },
    {
      question: '10. What is the purpose BREAK keyword?',
      answerWithMissingLetters: 'Answer: T_R_I_A_E',
      correctAnswer: 'TERMINATE',
    },

  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [userAnswers, setUserAnswers] = useState(Array(currentQuestion.correctAnswer.length).fill(''));
  const [savedAnswers, setSavedAnswers] = useState(Array(questions.length).fill(''));
  const [answerSaved, setAnswerSaved] = useState(false);
  const [testSubmitted, setTestSubmitted ] = useState(false);

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;

    // Move cursor to the next space
    if (index < newAnswers.length - 1 && event.target.value !== '') {
      document.getElementById(`answer-${index + 1}`).focus();
    }

    setUserAnswers(newAnswers);
    setAnswerSaved(false); // Reset the saved status when the answer is changed
  };

  const handleSaveClick = () => {
    setSavedAnswers((prevSavedAnswers) => {
      const newSavedAnswers = [...prevSavedAnswers];
      newSavedAnswers[currentQuestionIndex] = userAnswers.join('');
      setAnswerSaved(true); // Mark the answer as saved
      return newSavedAnswers;
    });
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswers(Array(questions[currentQuestionIndex + 1].correctAnswer.length).fill(''));
      setAnswerSaved(false); // Reset the saved status for the new question
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswers(savedAnswers[currentQuestionIndex - 1].split(''));
      setAnswerSaved(false); // Reset the saved status for the previous question
    }
  };

  const handleSubmitClick = () => {
    // Perform any necessary actions before submitting (e.g., checking answers)
    // For now, you can add your submission logic here.

    // If you want to keep track of test submission without any pop-up or action:
    setTestSubmitted(true);
  };

  return (
    <div className="main-container">
      <h1>C Programming Assessment</h1>
      <h3>Fill in the Blanks</h3>

      <div className="question-container">
        <div>
          <p>{currentQuestion.question}</p>
        </div>
        <div className="answers">
          <p>
            {currentQuestion.answerWithMissingLetters.replace(/_/g, (_, index) => userAnswers[index] || '_')}
          </p>
          {userAnswers.map((answer, index) => (
            <input
              id={`answer-${index}`}
              key={index}
              type="text"
              value={answer}
              onChange={(event) => handleAnswerChange(index, event)}
              placeholder="_"
            />
          ))}
        </div>
        <div className="button-container">
          <button onClick={handleSaveClick} className={answerSaved ? 'saved' : ''}>
            {answerSaved ? 'Answer Saved' : 'Save Answer'}
          </button>
          <button onClick={handlePreviousClick} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          {currentQuestionIndex === questions.length - 1 ? (
            <button onClick={handleSubmitClick}>Submit Test</button>
          ) : (
            <button onClick={handleNextClick} disabled={currentQuestionIndex === questions.length - 1}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;









