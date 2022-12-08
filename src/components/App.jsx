import { useState } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackObj = { good, neutral, bad };

  // onBtnClick = key => {
  //   this.setState(prev => ({
  //     [key]: prev[key] + 1,
  //   }));
  // };
  const onBtnClick = key => {
    switch (key) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  // * 1
  const countTotalFeedback = () => {
    return Object.values(feedbackObj).reduce((acc, ind) => acc + ind, 0);
  };
  //*2
  // const countTotalFeedback = () => {
  //   return good + neutral + bad;
  // };

  const countPositiveFeedbackPercentage = () => {
    const tot = countTotalFeedback();
    if (tot) {
      return Math.round((good * 100) / tot);
    }
  };

  const total = countTotalFeedback();

  //*1
  const options = Object.keys(feedbackObj);

  //* 2
  // const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onClickFeedback={onBtnClick}
        ></FeedbackOptions>
      </Section>
      <Section title=" Statistics">
        {!total ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
      <GlobalStyle />
    </>
  );
}
