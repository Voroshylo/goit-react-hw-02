import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import LoginForm from './components/Form/Form';
import './App.css';
import RadioTap from './components/Radio/Radio';

const App = () => {
 
  const initialFeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [feedback, setFeedback] = useState(initialFeedbackState);


  useEffect(() => {
    const storedFeedback = localStorage.getItem('feedback');
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };


  const resetFeedback = () => {
    setFeedback(initialFeedbackState);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const handleLogin = (userData) => {
    console.log(userData)
  }
  
  
  return (
    <div className="app">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
      
      <LoginForm onLogin={handleLogin} />
      <RadioTap/>
    </div>
  );
};

export default App;