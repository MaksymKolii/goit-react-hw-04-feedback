import { useState } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // onBtnClick = key => {
  //   this.setState(prev => ({
  //     [key]: prev[key] + 1,
  //   }));
  // };
  const onBtnClick = key => {
    this.setState(prev => ({
      [key]: prev[key] + 1,
    }));
  };

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce((acc, ind) => acc + ind, 0);
  // };
  const countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, ind) => acc + ind, 0);
  };
  // countPositiveFeedbackPercentage = () => {
  //   const tot = this.countTotalFeedback();
  //   if (tot) {
  //     return Math.round((this.state.good * 100) / tot);
  //   }
  // };
  const countPositiveFeedbackPercentage = () => {
    const tot = countTotalFeedback();
    if (tot) {
      return Math.round((this.state.good * 100) / tot);
    }
  };

  // const total = this.countTotalFeedback();
  // const { good, neutral, bad } = this.state;
  // const options = Object.keys(this.state);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onClickFeedback={this.onBtnClick}
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
